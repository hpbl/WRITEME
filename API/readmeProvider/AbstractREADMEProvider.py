import abc
from typing import List, Dict


class AbstractREADMEProvider(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def fetch_readmes_trees(self, url) -> List[List[Dict]]:
        """fetch the list of readme trees

            Parameters:
                - url: The path where the READMEs are (local folder or remote URL)

            Return:
                A list of READMEs in tree forms.
        """
        raise NotImplementedError()