# Define the relative paths
$targetFolder = ".\dev_build"
$sourceFolder = "..\Hypersprawl\builds\webglbuild1"

# Get the current timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"

# Clear the contents of the target folder and copy new files
Remove-Item "$targetFolder\*" -Recurse -Force
Copy-Item -Path "$sourceFolder\*" -Destination $targetFolder -Recurse -Force

# Stage changes, commit with timestamp, and push
git add $targetFolder\*
git commit -m "Auto commit from PowerShell script at $timestamp"
git push
