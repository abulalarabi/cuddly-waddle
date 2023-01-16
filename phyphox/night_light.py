import requests
import numpy as np
import urllib.request
import time
import pandas as pd
import numpy as np

IPAddress = '192.168.1.5:8080'  #IP address and port This is different for each person and specified by the phyphox app

start_dat = 'http://' + IPAddress + '/control?cmd=start'  #Starting a data collection
clear_dat = 'http://' + IPAddress + '/control?cmd=clear'  #Clearing a data collection
stop_dat = 'http://' + IPAddress + '/control?cmd=stop'    #Starting a data collection
save_dat = 'http://' + IPAddress + '/export?format=0'     #Saving data

data_dur = 2
delay    = 2

while True:
    try:
        urllib.request.urlopen(clear_dat)             #Clear data
        urllib.request.urlopen(start_dat)                       #Start collecting data!!
        print('Polling device for data')
    except:
        print('Device Failed to Start')
            
    time.sleep(data_dur)  
    

    try:
        urllib.request.urlopen(stop_dat)              #stop data collection
        r = requests.get(save_dat)                    #Get a CSV file
        open('./data.xls', 'wb').write(r.content)     #Write the data to a file
    except:
        print('Device Failed to Collect Data')

    data = pd.read_excel('./data.xls')
    lux = np.mean(data['Illuminance (lx)'].to_list())
    print('Mean lux: ', lux)

    import matplotlib.pyplot as plt
    import matplotlib.image as mpimg
    img = mpimg.imread('1.png')
    plt.imshow(img)
    plt.ion()
    #plt.show()

    time.sleep(delay)  