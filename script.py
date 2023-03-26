import os

def replace_extensions(path):
    for file in os.listdir(path):
        file_path = os.path.join(path, file)
        if os.path.isdir(file_path):
            replace_extensions(file_path)
        elif file_path.endswith('.ts'):
            new_path = file_path[:-2] + 'js'
            os.rename(file_path, new_path)
        elif file_path.endswith('.tsx'):
            new_path = file_path[:-3] + 'jsx'
            os.rename(file_path, new_path)

replace_extensions('.')
