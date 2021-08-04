import abc


class AbstractDataProvider(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def fetch_repositories(self, language_query, sort, number_repos, language):
        """Fetch a number of repositories acording that match the query parameters.
            Pagination may occur.

            Parameters:
                - query: The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub..
                - parameters: Query parameters (ex: "language:swift")
                - sort: Parameter to sort the query (ex: "stars")
                - numResults: Number of repositories wanted
                - language: Language folder

            Return:
                A list with the result of each request.
        """
        raise NotImplementedError()

    @abc.abstractmethod
    def fetch_readme_url(self, repo_full_name):
        raise NotImplementedError()


    @abc.abstractmethod
    def download_readme(self, download_url):
        raise NotImplementedError()