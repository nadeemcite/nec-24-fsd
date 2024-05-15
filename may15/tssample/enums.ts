enum ApplicationStage {
    INIT,
    PAYMENT_DONE,
    TEST_DONE,
    FINISHED
}

const currentStage:ApplicationStage = ApplicationStage.INIT

console.log(currentStage)