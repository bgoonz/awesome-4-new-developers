"""DLPack is a protocol for sharing arrays between deep learning frameworks."""

load("//third_party:repo.bzl", "tf_http_archive")

def repo():
    tf_http_archive(
        name = "dlpack",
        strip_prefix = "dlpack-277508879878e0a5b5b43599b1bea11f66eb3c6c",
        sha256 = "576f417bd16cf6d242129d0ad070224db9f35781f53f282efbaa1dc015a88087",
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/dmlc/dlpack/archive/277508879878e0a5b5b43599b1bea11f66eb3c6c.tar.gz",
            "https://github.com/dmlc/dlpack/archive/277508879878e0a5b5b43599b1bea11f66eb3c6c.tar.gz",
        ],
        build_file = "//third_party/dlpack:BUILD.bazel",
    )
