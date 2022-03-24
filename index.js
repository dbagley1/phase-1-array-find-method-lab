function superbowlWin(record) {
    let winYear = record.find((e) => e.result == 'W');
    return winYear && winYear.year || undefined;
}