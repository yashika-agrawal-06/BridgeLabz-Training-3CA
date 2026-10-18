function evaluateSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    const isUnsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;
    console.log(isUnsafe ? "Unsafe" : "Secure");
}

evaluateSecurity(true, true, true, true);
evaluateSecurity(false, true, true, true);
evaluateSecurity(true, false, true, true);
evaluateSecurity(true, true, false, true);
evaluateSecurity(true, true, true, false);
