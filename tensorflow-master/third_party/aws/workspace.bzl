"""loads the aws library, used by TF."""

load("//third_party:repo.bzl", "tf_http_archive")

# NOTE: version updates here should also update the major, minor, and patch variables declared in
# the  copts field of the //third_party/aws:aws target

def repo():
    tf_http_archive(
        name = "aws",
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/aws/aws-sdk-cpp/archive/1.7.336.tar.gz",
            "https://github.com/aws/aws-sdk-cpp/archive/1.7.336.tar.gz",
        ],
        sha256 = "758174f9788fed6cc1e266bcecb20bf738bd5ef1c3d646131c9ed15c2d6c5720",
        strip_prefix = "aws-sdk-cpp-1.7.336",
        build_file = "//third_party/aws:BUILD.bazel",
    )

    tf_http_archive(
        name = "aws-c-common",
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/awslabs/aws-c-common/archive/v0.4.29.tar.gz",
            "https://github.com/awslabs/aws-c-common/archive/v0.4.29.tar.gz",
        ],
        sha256 = "01c2a58553a37b3aa5914d9e0bf7bf14507ff4937bc5872a678892ca20fcae1f",
        strip_prefix = "aws-c-common-0.4.29",
        build_file = "//third_party/aws:aws-c-common.bazel",
    )

    tf_http_archive(
        name = "aws-c-event-stream",
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/awslabs/aws-c-event-stream/archive/v0.1.5.tar.gz",
            "https://github.com/awslabs/aws-c-event-stream/archive/v0.1.5.tar.gz",
        ],
        sha256 = "f1b423a487b5d6dca118bfc0d0c6cc596dc476b282258a3228e73a8f730422d4",
        strip_prefix = "aws-c-event-stream-0.1.5",
        build_file = "//third_party/aws:aws-c-event-stream.bazel",
    )

    tf_http_archive(
        name = "aws-checksums",
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/awslabs/aws-checksums/archive/v0.1.7.tar.gz",
            "https://github.com/awslabs/aws-checksums/archive/v0.1.7.tar.gz",
        ],
        sha256 = "810b24f9a7f48635f9a6fb15d53f72d879877a0a94c17eb86ef95fef4a45a6a3",
        strip_prefix = "aws-checksums-0.1.7",
        build_file = "//third_party/aws:aws-checksums.bazel",
    )
