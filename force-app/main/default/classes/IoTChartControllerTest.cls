@isTest
private class IoTChartControllerTest {
    @isTest
    static void getIotData() {
        // Create test data
        List<Incident_IOT__c> testIoTData = new List<Incident_IOT__c>();
        for(Integer i=0; i<10; i++) {
            Incident_IOT__c opp = new Incident_IOT__c(Name='Test IoT Data '+i, Origin__c='System', Status__c='New', Subject__c='Test IoT Data');
            testIoTData.add(opp);
        }
        insert testIoTData;
        // Call the method to be tested
        Test.startTest();
        List<Incident_IOT__c> result = IoTChartController.getIotData();
        Test.stopTest();
        // Verify the result
        System.assertEquals(10, result.size(), 'Expected 10 IoT Data');
        for(Integer i=0; i<10; i++) {
            Incident_IOT__c expectedOpp = testIoTData[i];
            Incident_IOT__c actualOpp = result[i];
            System.assertEquals(expectedOpp.Name, actualOpp.Name, 'Name should match');
            System.assertEquals(expectedOpp.Origin__c, actualOpp.Origin__c, 'Origin should match');
        }
    }
}