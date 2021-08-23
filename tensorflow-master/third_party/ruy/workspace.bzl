"""Loads the ruy library, used by TensorFlow Lite."""

load("//third_party:repo.bzl", "tf_http_archive")

def repo():
    tf_http_archive(
        name = "ruy",
        # LINT.IfChange
        sha256 = "2c49d028c488701ef96b392879f19417fdd5433152007f5b980175431e58fac3",
        strip_prefix = "ruy-9c56af3fce210a8a103eda19bd6f47c08a9e3d90",
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/google/ruy/archive/9c56af3fce210a8a103eda19bd6f47c08a9e3d90.zip",
            "https://github.com/google/ruy/archive/9c56af3fce210a8a103eda19bd6f47c08a9e3d90.zip",
        ],
        # LINT.ThenChange(//tensorflow/lite/tools/cmake/modules/ruy.cmake)
        build_file = "//third_party/ruy:BUILD",
    )
