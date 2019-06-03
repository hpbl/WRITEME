import csv


def load_csv_file(file_path):
    try:
        parsed_file = []
        with open(file_path, mode='r') as csv_file:
            csv_reader = csv.DictReader(csv_file)

            for row in csv_reader:
                parsed_file.append(row)

            return parsed_file

    except OSError:
        return None
