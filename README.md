# kurier
ansible playbook to install kurier.local


## First steps 

### Manual

* Authorized keys ssh login

* Switch off monitor

### Ansible

configure ansible inventory
* create ```inventory.hosts``` in this directory
```
kurier.local ansible_ssh_host=kurier.local ansible_ssh_port=22 ansible_ssh_user='pi' ansible_ssh_private_key_file=/home/ansibleuser/.ssh/<ssh.privateKey>
```

* check and you should see hosts(1), identified by 'alias'
```
ansible all -i inventory.hosts --list-hosts
```

* configure public/private key to define ssh connection

* check connection and see green response
```
ansible -i inventory.hosts all -m ping
```

* run playbook
```
ansible-playbook kurier.yml --ask-vault-pass -b -i inventory.hosts
```
and the password is a common name

* encrypt passwords
```
ansible-vault encrypt_string 'secret-value' --name 'variable_name'
```



