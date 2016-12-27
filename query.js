print('"date"\t"temperature"\t"humidity"')
db.reports.find({}).forEach(function (report) {
	print([
    report.date.toISOString().slice(0, 19),
		//Math.round(report.date.getTime() / 1000),
		report.temperature,
		report.humidity
	].join('\t'))
})
