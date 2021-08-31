"""Loads the kissfft library, used by TF Lite."""

load("//third_party:repo.bzl", "tf_http_archive")

def repo():
    tf_http_archive(
        name = "kissfft",
        strip_prefix = "kissfft-8f47a67f595a6641c566087bf5277034be64f24d",
        sha256 = "93cfa11a344ad552472f7d93c228d55969ac586275692d73d5e7ce73a69b047f",
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/mborgerding/kissfft/archive/8f47a67f595a6641c566087bf5277034be64f24d.tar.gz",
            "https://github.com/mborgerding/kissfft/archive/8f47a67f595a6641c566087bf5277034be64f24d.tar.gz",
        ],
        build_file = "//third_party/kissfft:BUILD.bazel",
    )
