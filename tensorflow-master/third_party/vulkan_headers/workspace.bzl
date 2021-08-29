"""Loads Vulkan-Headers, used by TF Lite."""

load("//third_party:repo.bzl", "tf_http_archive")

def repo():
    tf_http_archive(
        name = "vulkan_headers",
        # LINT.IfChange
        strip_prefix = "Vulkan-Headers-9e62d027636cd7210f60d934f56107ed6e1579b8",
        sha256 = "44da373977b1266371774a473792a09d65fe11ec0d1f29d95c7a3d2f035f1fc0",
        link_files = {
            "//third_party/vulkan_headers:tensorflow/vulkan_hpp_dispatch_loader_dynamic.cc": "tensorflow/vulkan_hpp_dispatch_loader_dynamic.cc",
        },
        urls = [
            "https://storage.googleapis.com/mirror.tensorflow.org/github.com/KhronosGroup/Vulkan-Headers/archive/9e62d027636cd7210f60d934f56107ed6e1579b8.tar.gz",
            "https://github.com/KhronosGroup/Vulkan-Headers/archive/9e62d027636cd7210f60d934f56107ed6e1579b8.tar.gz",
        ],
        # LINT.ThenChange(//tensorflow/lite/tools/cmake/modules/vulkan_headers.cmake)
        build_file = "//third_party/vulkan_headers:BUILD.bazel",
    )
