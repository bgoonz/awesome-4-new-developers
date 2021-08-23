"""Loads the Flatbuffers library, used by TF Lite."""

load("//third_party:repo.bzl", "tf_http_archive")

def repo():
    tf_http_archive(
        name = "flatbuffers",
        strip_prefix = "flatbuffers-1.12.1",
        sha256 = "90e6a65ff5b8e9fc225af3a9d7bf4d2e120cfe40c27dfd5527f67c0d4eb5b954",
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/google/flatbuffers/archive/v1.12.1.tar.gz",
            "https://github.com/google/flatbuffers/archive/v1.12.1.tar.gz",
        ],
        build_file = "//third_party/flatbuffers:BUILD.bazel",
        system_build_file = "//third_party/flatbuffers:BUILD.system",
        link_files = {
            "//third_party/flatbuffers:build_defs.bzl": "build_defs.bzl",
        },
    )
