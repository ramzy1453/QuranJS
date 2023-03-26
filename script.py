import subprocess

def JavaScript(jsCode, variablesDict):
    # Create a temporary file to hold the JavaScript code
    with open('temp.js', 'w') as f:
        f.write(jsCode)

    # Construct the command to run the Node.js executable with the JavaScript file and variables
    cmd = ['node', 'temp.js']
    for key, value in variablesDict.items():
        cmd.append(f'--{key}={value}')

    # Run the command and capture the output
    process = subprocess.run(cmd, capture_output=True, text=True)

    # Delete the temporary file
    subprocess.run(['rm', 'temp.js'])

    # Return the output of the JavaScript code
    return process.stdout.strip()



result = JavaScript('''
    function add(a, b) {
        return a + b;
    }
    result = add(x, y);
''', 
    {'x': 2, 'y': 3}
)
print(result) 
