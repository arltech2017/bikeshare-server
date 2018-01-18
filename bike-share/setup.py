from setuptools import setup

setup(
    name='bike-share',
    packages=['bike-share'],
    include_package_data=True,
    install_requires=[
        'flask',
        'flask-sqlalchemy',
    ],
)