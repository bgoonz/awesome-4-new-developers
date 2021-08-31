"""Loads OpenCL-Headers, used by TF Lite."""

load("//third_party:repo.bzl", "tf_http_archive")

def repo():
    tf_http_archive(
        name = "opencl_headers",
        # LINT.IfChange
        strip_prefix = "OpenCL-Headers-1bb9ec797d14abed6167e3a3d66ede25a702a5c7",
        sha256 = "7673125e42ca68c8e2acd552fa9beef1d152a1b867044bf4e52d9a94b3ccf911",
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/KhronosGroup/OpenCL-Headers/archive/1bb9ec797d14abed6167e3a3d66ede25a702a5c7.tar.gz",
            "https://github.com/KhronosGroup/OpenCL-Headers/archive/1bb9ec797d14abed6167e3a3d66ede25a702a5c7.tar.gz",
        ],
        # LINT.ThenChange(//tensorflow/lite/tools/cmake/modules/opencl_headers.cmake)
        build_file = "//third_party/opencl_headers:BUILD.bazel",
    )
