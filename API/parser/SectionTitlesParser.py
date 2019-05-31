import csv


def parse_classified_sections(classified_sections_csv):
    with open(classified_sections_csv) as csv_file:
        read_csv = csv.reader(csv_file, delimiter=',')
        return [{'title': row[3], 'codes': row[4]} for row in read_csv]

