var ApplicationStage;
(function (ApplicationStage) {
    ApplicationStage[ApplicationStage["INIT"] = 0] = "INIT";
    ApplicationStage[ApplicationStage["PAYMENT_DONE"] = 1] = "PAYMENT_DONE";
    ApplicationStage[ApplicationStage["TEST_DONE"] = 2] = "TEST_DONE";
    ApplicationStage[ApplicationStage["FINISHED"] = 3] = "FINISHED";
})(ApplicationStage || (ApplicationStage = {}));
var currentStage = ApplicationStage.INIT;
console.log(currentStage);
