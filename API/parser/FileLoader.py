import csv


def load_csv_file(file_path):
    try:
        with open(file_path, mode='r') as csv_file:
            csv_reader = csv.DictReader(csv_file)
            return [row for row in csv_reader]

    except OSError:
        return None
