import abc
from typing import Optional, List
from API.model.Section import Section


class AbstractSectionProvider(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def fetch_classified_sections(self, url) -> Optional[List[Section]]:
        """fetch the list of classified sections

            Parameters:
                - url: The path to where theses sections are (local file or remote URL)

            Return:
                A list of classified Section objects, or None if fetching fails
        """
        raise NotImplementedError()
