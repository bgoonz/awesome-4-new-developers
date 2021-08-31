define([
  "../../lib/chai/chai.js",
  "../../lib/underscore/underscore.js",
], function (chai) {
  var expect = chai.expect;

  return function (constructor) {
    return {
      followsPattern: function (pattern, options, prototypeOfInstances) {
        var patternIs = function () {
          return _(arguments).contains(pattern);
        };

        if (
          !patternIs(
            "functional",
            "functional-shared",
            "prototypal",
            "pseudoclassical"
          )
        ) {
          throw new Error("Unrecognized class pattern");
        }

        if (patternIs("prototypal") && !prototypeOfInstances) {
          throw new Error(
            "Testing the prototypal pattern requires you to supply the expected prototype"
          );
        }

        var requireOption = function (optionName) {
          return option(optionName, true);
        };

        var option = function (optionName, required) {
          if (required && !options.hasOwnProperty(optionName)) {
            throw new Error(
              "testClassPattern requires the " + optionName + " option"
            );
          }
          var setting = options[optionName];
          delete options[optionName];
          return setting;
        };

        options = _({
          usesNew: patternIs("pseudoclassical"),
          referencesThis: patternIs("pseudoclassical"),
          extendsPrototype: patternIs("pseudoclassical"),
          reusesMethods: patternIs(
            "functional-shared",
            "prototypal",
            "pseudoclassical"
          ),
          referencesReturn: patternIs(
            "functional",
            "functional-shared",
            "prototypal"
          ),
          declaresVariables: patternIs(
            "functional",
            "functional-shared",
            "prototypal"
          ),
          hasOwnMethods: patternIs("functional", "functional-shared"),
          reusesNonFunctions: patternIs(),
          extendsConstructor: patternIs(),
        }).extend(options || {});

        prototypeOfInstances = patternIs("functional")
          ? Object.prototype
          : patternIs("functional-shared")
          ? Object.prototype
          : patternIs("pseudoclassical")
          ? constructor.prototype
          : prototypeOfInstances;

        var constructionArgs = option("constructionArgs") || [];
        var usesNew = requireOption("usesNew");
        var instantiate = function () {
          if (!usesNew) {
            return constructor.apply(this, constructionArgs);
          } else {
            var instance = Object.create(constructor.prototype);
            var constructorReturn = constructor.prototype.constructor.apply(
              instance,
              constructionArgs
            );
            if (constructorReturn && constructorReturn !== instance) {
              console.warn(
                "Psuedoclassical constructor returned something explicitly (returns `this` implicitly by default)."
              );
            }
            return instance;
          }
        };

        var might = function (behavior, setting) {
          return "does " + (setting ? "" : "not ") + behavior;
        };

        var assuming = function (condition) {
          return {
            expect: function () {
              var expectActual = expect.apply(null, arguments);
              return condition ? expectActual : expectActual.not;
            },
          };
        };

        describe(pattern + " instantiation style", function () {
          var instance;

          beforeEach(function () {
            instance = instantiate();
          });

          it("makes new instances that delegate to appropriate prototype object", function () {
            expect(prototypeOfInstances.isPrototypeOf(instance)).to.be.true;
          });

          var constructorPrototypeProto = option("constructorPrototypeProto");
          if (constructorPrototypeProto) {
            it("makes the constructor's .prototype property delegate to the appropriate prototype object", function () {
              expect(
                constructorPrototypeProto.isPrototypeOf(constructor.prototype)
              ).to.be.true;
            });
          }

          it("has a .prototype.constructor property that points back to the constructor itself", function () {
            expect(constructor.prototype.constructor).to.equal(constructor);
          });

          var extendsConstructor = requireOption("extendsConstructor");
          it(
            might("extend the constructor function", extendsConstructor),
            function () {
              constructorPropertyCount = Object.keys(constructor).length;
              assuming(extendsConstructor)
                .expect(constructorPropertyCount)
                .to.be.above(0);
            }
          );

          var extendsPrototype = requireOption("extendsPrototype");
          it(
            might(
              "extend the constructor function's prototype",
              extendsPrototype
            ),
            function () {
              var prototypeObjectPropertyCount = Object.keys(
                constructor.prototype
              ).length;
              assuming(extendsPrototype)
                .expect(prototypeObjectPropertyCount)
                .to.be.above(0);
            }
          );

          var referencesThis = requireOption("referencesThis");
          it(might("reference the keyword this", referencesThis), function () {
            assuming(referencesThis).expect(
              /((?!\/\/).)*(this)/m.test(constructor)
            ).to.be.true;
          });

          var referencesReturn = requireOption("referencesReturn");
          it(
            might("reference the return keyword", referencesReturn),
            function () {
              assuming(referencesReturn).expect(/return/.test(constructor)).to
                .be.true;
            }
          );

          var declaresVariables = requireOption("declaresVariables");
          it(might("declare variables", declaresVariables), function () {
            assuming(declaresVariables).expect(
              /var /.test(constructor)
            ).to.be.true;
          });

          it("does store properties without use of a prototype chain", function () {
            _(instance).each(function (value, key) {
              if (typeof value !== "function") {
                expect(instance.hasOwnProperty(key)).to.be.true;
              }
            });
          });

          var hasOwnMethods = requireOption("hasOwnMethods");
          it(
            might(
              "store methods without use of a prototype chain",
              hasOwnMethods
            ),
            function () {
              _(_(instance).methods()).each(function (methodName) {
                assuming(hasOwnMethods).expect(
                  instance.hasOwnProperty(methodName)
                ).to.be.true;
              });
            }
          );

          var reusesNonFunctions = requireOption("reusesNonFunctions");
          it(
            might(
              "reuse non-function objects across multiple instances",
              reusesNonFunctions
            ),
            function () {
              var otherInstance = instantiate();
              _(instance).each(function (value, key) {
                if (value && typeof value === "object") {
                  assuming(reusesNonFunctions)
                    .expect(value)
                    .to.equal(otherInstance[key]);
                }
              });
            }
          );

          var reusesMethods = requireOption("reusesMethods");
          it(
            might("reuse methods across multiple instances", reusesMethods),
            function () {
              var otherInstance = instantiate();
              _(_(instance).methods()).each(function (methodName) {
                assuming(reusesMethods)
                  .expect(instance[methodName])
                  .to.equal(otherInstance[methodName]);
              });
            }
          );
        });

        if (!_(options).isEmpty()) {
          console.warn(
            "testClassPattern is being invoked with unused options: ",
            options
          );
        }
      },
    };
  };
});
