import setuptools
from datetime import datetime

with open("readme.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="DiscountPackage",
    version="1.0.0",
    author="Eric Lian",
    author_email="public@superexercisebook.com",
    description=long_description,
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/paraparty",
    project_urls={
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    package_dir={"": "src"},
    packages=setuptools.find_packages(where="src"),
    python_requires=">=3.6",
)

if datetime.now().weekday() == 3:
    raise RuntimeError("KFC Crazy Thursday!")