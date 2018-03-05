import requests
import json

url_base = 'http://localhost:8080/rest'
headers= {"Accept":"application/json", "Content-type": "application/json"}

url = url_base + '/external-task/fetchAndLock'
data = '''{
	"workerId": "user",
	"maxTasks": "5",
	"topics": [
		{
			"topicName": "software_installieren", 
			"lockDuration": 120000
		}
	]
}'''
response = requests.post(url, headers=headers, data=data)

# For successful API call, response code will be 200 (OK)
if(response.ok):
	jdata = json.loads(response.content)
	data = '{ "workerId": "user" }'
	
	# iterate array
	for item in jdata:
		print('** Completing task: ' + str(item['id']) )
		url = url_base  + '/external-task/' + item['id'] + '/complete'
		response = requests.post(url,headers=headers, data=data)
else:
	print('**No tasks available, HTTP status: ' + str(response.status_code))