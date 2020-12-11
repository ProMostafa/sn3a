# Sn3a

### How Run This Application On ubuntu

Suposed you have installed python3, virtual environment module and pip. 

```shell
Sn3a-Web-app$ python3 -m venv .venv
Sn3a-Web-app$ source .venv/bin/active
Sn3a-Web-app$ pip3 install -r requirements.txt
```
After that you have to update settings.py file to adjust database configration.


Then migrate database
```shell
Sn3a-Web-app$ python3 manage.py makemigrations
Sn3a-Web-app$ python3 manage.py migrate
Sn3a-Web-app$ python3 manage.py runserver
```
