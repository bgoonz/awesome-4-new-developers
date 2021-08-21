"""Loads the clog library, used by cpuinfo and XNNPACK."""

load("//third_party:repo.bzl", "tf_http_archive")

def repo():
    tf_http_archive(
        name = "clog",
        strip_prefix = "cpuinfo-866ae6e5ffe93a1f63be738078da94cf3005cce2",
        sha256 = "6e3149b48cf48d047ba96636acb202171ff7c222c5a2056d69ae0ce245649f20",
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/pytorch/cpuinfo/archive/866ae6e5ffe93a1f63be738078da94cf3005cce2.tar.gz",
            "https://github.com/pytorch/cpuinfo/archive/866ae6e5ffe93a1f63be738078da94cf3005cce2.tar.gz",
        ],
        build_file = "//third_party/clog:BUILD.bazel",
    )
