"""Loads the cpuinfo library, used by XNNPACK."""

load("//third_party:repo.bzl", "tf_http_archive")

def repo():
    tf_http_archive(
        name = "cpuinfo",
        strip_prefix = "cpuinfo-866ae6e5ffe93a1f63be738078da94cf3005cce2",
        sha256 = "17d136b1793297a80c1f7afd01414f4e6f1ac79d17720f45b13b926231648336",
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/pytorch/cpuinfo/archive/866ae6e5ffe93a1f63be738078da94cf3005cce2.zip",
            "https://github.com/pytorch/cpuinfo/archive/866ae6e5ffe93a1f63be738078da94cf3005cce2.zip",
        ],
        build_file = "//third_party/cpuinfo:BUILD.bazel",
    )
