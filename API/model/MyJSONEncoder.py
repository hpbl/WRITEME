from flask.json import JSONEncoder

from API.model.Section import Section


class MyJSONEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Section):
            return obj.to_json()
        return super(MyJSONEncoder, self).default(obj)