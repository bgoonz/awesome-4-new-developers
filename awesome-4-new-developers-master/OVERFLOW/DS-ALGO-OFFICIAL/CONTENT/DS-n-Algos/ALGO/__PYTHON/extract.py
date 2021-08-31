import tarfile

fname = "spark-3.0.2-bin-hadoop2.7.tgz"

if fname.endswith("tgz"):
    tar = tarfile.open(
        "C:\\Users\\ag16000\Downloads\\spark-3.0.2-bin-hadoop2.7.tgz", "r:gz"
    )
    tar.extractall()
    tar.close()
elif fname.endswith("tar"):
    tar = tarfile.open(
        "C:\\Users\\ag16000\Downloads\\spark-3.0.2-bin-hadoop2.7.tgz", "r:"
    )
    tar.extractall()
    tar.close()
