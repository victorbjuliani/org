import os

# get all files inside a specific folder
dir_path = r'D:\\REACT\\Org\\src\\webparts\\organigramaMxWebPart\\assets\\users'
for path in os.scandir(dir_path):
    if path.is_file():
        print(path.name)