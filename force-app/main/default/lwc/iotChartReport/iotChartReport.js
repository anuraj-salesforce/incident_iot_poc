import {
    LightningElement,
    wire,
    track
} from 'lwc';
import getIoTData from '@salesforce/apex/IoTChartController.getIotData';

export default class IotChartReport extends LightningElement {
    @track chartConfiguration;

    @wire(getIoTData, {})
    getIoTData({
        error,
        data
    }) {
        if (error) {
            this.error = error;
            this.chartConfiguration = undefined;
        } else if (data) {
            let chartData = [0, 0, 0];
            let chartLabels = [
                'IOT',
                'System',
                'Customer'
              ];
            data.forEach(iotChartData => {
                iotChartData.Origin__c === 'IOT' && (chartData[0] = chartData[0] + 1);
                iotChartData.Origin__c === 'System' && (chartData[1] = chartData[1] + 1);
                iotChartData.Origin__c === 'Customer' && (chartData[2] = chartData[2] + 1);
            });

            this.chartConfiguration = {
                type: 'doughnut',                
                data: {
                    labels: chartLabels,
                    datasets: [{
                        label: 'IOT Incident Dataset',
                        data: chartData,
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4
                    }]
                },
                options: {},
            };
            this.error = undefined;
        }
    }
}