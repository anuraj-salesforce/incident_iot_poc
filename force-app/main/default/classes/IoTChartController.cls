public with sharing class IoTChartController {
    @AuraEnabled(cacheable=true)
    public static List<Incident_IOT__c> getIotData(){
        return [SELECT Name, Origin__c FROM Incident_IOT__c];
    }
}