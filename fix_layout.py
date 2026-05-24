import re

files_to_fix = [
    "src/App.jsx",
    "src/components/ContentCreation.jsx",
    "src/components/Gallery.jsx",
    "src/components/Recognition.jsx",
    "src/components/Research.jsx"
]

for file in files_to_fix:
    with open(file, "r") as f:
        content = f.read()
    
    # In App.jsx, change PADDING export to CONTAINER_CLASSES
    if file == "src/App.jsx":
        content = content.replace(
            'export const PADDING = "px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-32";',
            'export const CONTAINER_CLASSES = "mx-auto w-full max-w-[1320px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20 lg:py-24";'
        )
    else:
        content = content.replace('PADDING', 'CONTAINER_CLASSES')

    # Replace className={`${PADDING}`} or className={`... ${PADDING}`} with className="" and add wrapper inside
    # Wait, it's easier to just do it manually. Let's just do it step by step in Python for common patterns.
    
    with open(file, "w") as f:
        f.write(content)
