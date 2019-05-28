### Read Me

An AngularJS directive for the CKEditor, binding the AngularJS controller to the CKEditor's mark-up, plain-text and configuration options. 

#### Getting Started

@abstr_number . Copy over the file dist/ck-editor.min.js or dist/ck-editor.js

@abstr_number . Include the path to the direcitve file in index.html
    
    
        <script src="[your path]/directives/ck-editor.js"></script>
    

@abstr_number . Include the directive as a dependency when defining the angular app:
    
    
        var exampleApp = angular.module('exampleApp', ['ckeditor']);
    

@abstr_number . Include the required CKEditor options in the controller:
    
    
        $scope.ckEditorOptions = {
                toolbar: 'full',
                toolbar_full: [
                    {
                        name: 'basicstyles',
                        items: ['Bold', 'Italic', 'Strike', 'Underline']
                    },
                    {
                        name: 'paragraph',
                        items: ['BulletedList', 'NumberedList', 'Blockquote']
                    },
                    {
                        name: 'insert',
                        items: ['Table', 'SpecialChar']
                    },
                    {
                        name: 'forms',
                        items: ['Outdent', 'Indent']
                    },
                    {
                        name: 'clipboard',
                        items: ['Undo', 'Redo']
                    }
                ],
                uiColor: '#FAFAFA',
                height: ' @abstr_number px'
            };
    

@abstr_number . Reference the directive in the HTML page: 
    
    
        <textarea ck-editor ng-model="markUp" plaintext="plainText" options="ckEditorOptions"></textarea>
    

See the examples folder for a basic implementation of the directive.

#### Requirements

AngularJS - v. @abstr_number . @abstr_number . @abstr_number   
CKEditor - v. @abstr_number . @abstr_number . @abstr_number 

##### Credit

This directive is a combination of the various code snippets provided in the answers to the following StackOverflow question with a few of my tweaks added too:

http://stackoverflow.com/questions/ @abstr_number /updating-textarea-value-with-ckeditor-content-in-angular-js
