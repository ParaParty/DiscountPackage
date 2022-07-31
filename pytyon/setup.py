import setuptools
from datetime import datetime

long_description = """ # DiscountPackage
"""

setuptools.setup(
    name="DiscountPackage",
    version="1.0.1",
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
    python_requires=">=2.7",
)

if datetime.now().weekday() == 3:
    raise RuntimeError("KFC Crazy Thursday!")