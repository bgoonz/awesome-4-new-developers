import psutil
import json


def getListOfProcessSortedByMemory():
    listOfProcObjects = []

    for proc in psutil.process_iter():
        pinfo = proc.as_dict(attrs=["pid", "name"])
        pinfo["CPU_USAGE"] = proc.memory_info().vms / (1024 * 1024)
        # Append dict to list
        listOfProcObjects.append(pinfo)

    listOfProcObjects = sorted(
        listOfProcObjects, key=lambda procObj: procObj["CPU_USAGE"], reverse=True
    )
    result = json.dumps(listOfProcObjects)
    lis = result.split("}")
    lst = [e[3:] for e in lis]
    start_text = """
    <html>
        <body>"""
    end_text = """
        </body>
    </html>
    """
    f = open("dump.html", "w+")
    f.write(start_text)
    for elem in lst:
        print(elem + str(" MB"))
        f.write("<p>" + str(elem) + " MB" + "</p>")
    f.write(end_text)
    f.close()


def main():

    print("##### Create a list of all running processes #######")
    getListOfProcessSortedByMemory()


if __name__ == "__main__":
    main()
