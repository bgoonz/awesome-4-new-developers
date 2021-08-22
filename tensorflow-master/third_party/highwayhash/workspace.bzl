"""loads the highwayhash library, used by TF."""

load("//third_party:repo.bzl", "tf_http_archive")

def repo():
    tf_http_archive(
        name = "highwayhash",
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/google/highwayhash/archive/ca0ff296b116354957276cef2c61be171ac2f897.tar.gz",
            "https://github.com/google/highwayhash/archive/ca0ff296b116354957276cef2c61be171ac2f897.tar.gz",
        ],
        sha256 = "2092ade47d7cf9f938e50517dc4181f3edb7aba738f58933cf4149974f698ba9",
        strip_prefix = "highwayhash-ca0ff296b116354957276cef2c61be171ac2f897",
        build_file = "//third_party/highwayhash:BUILD.bazel",
    )
