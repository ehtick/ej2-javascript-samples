window.blockDataAPI = [
    {
        id: 'heading-block',
        type: 'Heading1',
        content: [{ 
            id: 'heading-content',
            type: 'Text',
            content: 'Block Editor API Demo'
        }]
    },
    {
        id: 'intro-block',
        type: 'Paragraph',
        content: [{ 
            id: 'intro-content',
            type: 'Text',
            content: 'The Block Editor enables users to create, format, and organize content using various block types.'
        }]
    },
    {
        id: 'api-heading',
        type: 'Heading2',
        content: [{ 
            id: 'api-heading-content',
            type: 'Text',
            content: 'API Features:'
        }]
    },
    {
        id: 'api-list-1',
        type: 'BulletList',
        content: [{ 
            id: 'api-list-1-content',
            type: 'Text',
            content: 'readOnly - allows to change it as a non-editable state.'
        }]
    },
    {
        id: 'api-list-2',
        type: 'BulletList',
        content: [{ 
            id: 'api-list-2-content',
            type: 'Text',
            content: 'enableDragAndDrop - allows to control drag-and-drop operations within the block editor.'
        }]
    },
    {
        id: 'api-list-3',
        type: 'BulletList',
        content: [{ 
            id: 'api-list-3-content',
            type: 'Text',
            content: 'enableHtmlEncode - Get the encoded string value through value property and source code panel.'
        }]
    },
    {
        id: 'api-list-4',
        type: 'BulletList',
        content: [{ 
            id: 'api-list-4-content',
            type: 'Text',
            content: 'selectAllBlocks - Selects all blocks in the editor.'
        }]
    },
    {
        id: 'api-list-5',
        type: 'BulletList',
        content: [{ 
            id: 'api-list-5-content',
            type: 'Text',
            content: 'focusIn - Focuses the editor.'
        }]
    },
    {
        id: 'api-list-6',
        type: 'BulletList',
        content: [{ 
            id: 'api-list-6-content',
            type: 'Text',
            content: 'focusOut - Removes focus from the editor.'
        }]
    },
    {
        id: 'api-list-7',
        type: 'BulletList',
        content: [{ 
            id: 'api-list-7-content',
            type: 'Text',
            content: 'getBlockCount - Gets total block count.'
        }]
    },
    {
        id: 'api-list-8',
        type: 'BulletList',
        content: [{ 
            id: 'api-list-8-content',
            type: 'Text',
            content: 'getDataAsJson - Retrieves data from the editor as JSON.'
        }]
    },
        {
        id: 'api-list-9',
        type: 'BulletList',
        content: [{ 
            id: 'api-list-8-content',
            type: 'Text',
            content: 'getDataAsHtml - Retrieves data from the editor as HTML.'
        }]
    },
    {
        id: 'try-it-block',
        type: 'Paragraph',
        content: [{ 
            id: 'try-it-content',
            type: 'Text',
            content: 'Try it out! Use the property panel on the right to interact with the API.',
            styles: {
                bold: true,
                bgColor: '#999999'
            }
        }]
    }
];

window.blockDataOverview = [
    {
        id: 'heading-block',
        type: 'Heading1',
        content: [{ 
            id: 'heading-content',
            type: 'Text',
            content: 'Welcome to the Block Editor Demo!'
        }]
    },
    {
        id: 'intro-block',
        type: 'Paragraph',
        content: [{ 
            id: 'intro-content',
            type: 'Text',
            content: 'Block Editor is a powerful rich text editor that allows you to create structured content using blocks. Each block can be formatted, moved, or transformed into different types.',
        }]
    },
    {
        id: 'styled-paragraph',
        type: 'Paragraph',
        content: [
            { 
                id: 'styled-text-1',
                type: 'Text',
                content: 'Try selecting text to see '
            },
            {
                id: 'styled-text-2',
                type: 'Text',
                content: 'formatting options',
                styles: {
                    bold: true,
                    italic: true
                }
            },
            {
                id: 'styled-text-3',
                type: 'Text',
                content: ' or type '
            },
            {
                id: 'styled-text-4',
                type: 'Text',
                content: '"/"',
                styles: {
                    bgColor: '#999999',
                    bold: true
                }
            },
            {
                id: 'styled-text-5',
                type: 'Text',
                content: ' to access the command menu.'
            }
        ]
    },
    {
        id: 'block-types-heading',
        type: 'Heading2',
        content: [{ 
            id: 'block-types-heading-content',
            type: 'Text',
            content: 'Block Types'
        }]
    },
    {
        id: 'quote-block',
        type: 'Quote',
        content: [{ 
            id: 'quote-content',
            type: 'Text',
            content: 'The Block Editor makes document creation a seamless experience with its intuitive block-based approach.',
            styles: {
                italic: true
            }
        }]
    },
    {
        id: 'callout-block',
        type: 'Callout',
        content: [{ 
            id: 'callout-content',
            type: 'Text',
            content: 'Important: Block Editor supports various content types including Text, Link, Code, Mention, and Label.',
            styles: {
                bold: true
            }
        }]
    },
    {
        id: 'list-types-heading',
        type: 'Heading3',
        content: [{ 
            id: 'list-types-heading-content',
            type: 'Text',
            content: 'List Types'
        }]
    },
    {
        id: 'bullet-list-header',
        type: 'BulletList',
        content: [{ 
            id: 'bullet-list-header-content',
            type: 'Text',
            content: 'Text blocks: Paragraph, Heading 1-4, Quote, Callout',
            styles: {
                bold: true
            }
        }]
    },
    {
        id: 'numbered-list',
        type: 'NumberedList',
        content: [{ 
            id: 'numbered-list-content',
            type: 'Text',
            content: 'Lists: Bullet lists, Numbered lists, Check lists'
        }]
    },
    {
        id: 'check-list',
        type: 'CheckList',
        isChecked: true,
        content: [{ 
            id: 'check-list-content',
            type: 'Text',
            content: 'Special blocks: Divider, Toggle, Code block'
        }]
    },
    {
        id: 'divider-block',
        type: 'Divider',
        content: []
    },
    {
        id: 'toggle-block',
        type: 'ToggleParagraph',
        isExpanded: true,
        content: [{ 
            id: 'toggle-content',
            type: 'Text',
            content: 'Click me to expand/collapse'
        }],
        children: [
            {
                id: 'toggle-child',
                type: 'Paragraph',
                content: [{ 
                    id: 'toggle-child-content',
                    type: 'Text',
                    content: 'This content is inside a toggle block. Toggle blocks are useful for organizing content that can be expanded or collapsed.',
                }]
            }
        ]
    },
    {
        id: 'code-block',
        type: 'Code',
        content: [{ 
            id: 'code-content',
            type: 'Text',
            content: 'const editor = new BlockEditor();\neditor.appendTo("#element");'
        }]
    },
    {
        id: 'formatting-heading',
        type: 'Heading4',
        content: [{ 
            id: 'formatting-heading-content',
            type: 'Text',
            content: 'Text Formatting Examples'
        }]
    },
    {
        id: 'formatting-examples',
        type: 'Paragraph',
        content: [
            { 
                id: 'format-bold',
                type: 'Text',
                content: 'Bold ',
                styles: {
                    bold: true
                }
            },
            { 
                id: 'format-italic',
                type: 'Text',
                content: 'Italic ',
                styles: {
                    italic: true
                }
            },
            { 
                id: 'format-underline',
                type: 'Text',
                content: 'Underline ',
                styles: {
                    underline: true
                }
            },
            { 
                id: 'format-strikethrough',
                type: 'Text',
                content: 'Strikethrough ',
                styles: {
                    strikethrough: true
                }
            },
            { 
                id: 'format-superscript',
                type: 'Text',
                content: 'Superscript ',
                styles: {
                    superscript: true
                }
            },
            { 
                id: 'format-subscript',
                type: 'Text',
                content: 'Subscript ',
                styles: {
                    subscript: true
                }
            },
            { 
                id: 'format-uppercase',
                type: 'Text',
                content: 'uppercase ',
                styles: {
                    uppercase: true
                }
            },
            { 
                id: 'format-lowercase',
                type: 'Text',
                content: 'LOWERCASE',
                styles: {
                    lowercase: true
                }
            }
        ]
    },
    {
        id: 'link-block',
        type: 'Paragraph',
        content: [
            { 
                id: 'link-text',
                type: 'Text',
                content: 'Visit '
            },
            { 
                id: 'link-content',
                type: 'Link',
                content: 'Syncfusion',
                linkSettings: {
                    url: 'https://www.syncfusion.com/',
                    openInNewWindow: true
                }
            },
            { 
                id: 'link-text-end',
                type: 'Text',
                content: ' for more information.'
            }
        ]
    },
    {
        id: 'label-block',
        type: 'Paragraph',
        content: [
            { 
                id: 'label-text',
                type: 'Text',
                content: 'This block contains a '
            },
            { 
                id: 'progress',
                type: 'Label'
            },
            { 
                id: 'label-text-end',
                type: 'Text',
                content: ' label.'
            }
        ]
    },
    {
        id: 'try-it-block',
        type: 'Paragraph',
        content: [{ 
            id: 'try-it-content',
            type: 'Text',
            content: 'Try it out! Click anywhere and start typing, or type "/" to see available commands.',
            styles: {
                bold: true,
                bgColor: '#999999'
            }
        }]
    }
]

window.blockDataEvents = [
    {
        id: 'heading-block',
        type: 'Heading1',
        content: [{ 
            id: 'heading-content',
            type: 'Text',
            content: 'Block Editor Events Demo'
        }]
    },
    {
        id: 'intro-block',
        type: 'Paragraph',
        content: [{ 
            id: 'intro-content',
            type: 'Text',
            content: 'This sample demonstrates the events triggered by the Block Editor component. Try different actions to see the events in the trace panel.'
        }]
    },
    {
        id: 'features-heading',
        type: 'Heading2',
        content: [{ 
            id: 'features-heading-content',
            type: 'Text',
            content: 'Notable Features:'
        }]
    },
    {
        id: 'feature-list-1',
        type: 'BulletList',
        content: [{ 
            id: 'feature-list-1-content',
            type: 'Text',
            content: 'Block-based editing with various block types (paragraphs, headings, lists, etc.)'
        }]
    },
    {
        id: 'feature-list-2',
        type: 'BulletList',
        content: [{ 
            id: 'feature-list-2-content',
            type: 'Text',
            content: 'Slash commands for quick block transformation'
        }]
    },
    {
        id: 'feature-list-3',
        type: 'BulletList',
        content: [{ 
            id: 'feature-list-3-content',
            type: 'Text',
            content: 'Rich text formatting with inline toolbar'
        }]
    },
    {
        id: 'feature-list-4',
        type: 'BulletList',
        content: [{ 
            id: 'feature-list-4-content',
            type: 'Text',
            content: 'Hierarchical content organization with nested blocks'
        }]
    },
    {
        id: 'feature-list-5',
        type: 'BulletList',
        content: [{ 
            id: 'feature-list-5-content',
            type: 'Text',
            content: 'Block manipulation (move, delete, duplicate)'
        }]
    },
    {
        id: 'feature-list-6',
        type: 'BulletList',
        content: [{ 
            id: 'feature-list-6-content',
            type: 'Text',
            content: 'Keyboard shortcuts for efficient editing'
        }]
    },
    {
        id: 'feature-list-7',
        type: 'BulletList',
        content: [{ 
            id: 'feature-list-7-content',
            type: 'Text',
            content: 'Drag and drop functionality for blocks'
        }]
    },
    {
        id: 'try-it-block',
        type: 'Paragraph',
        content: [{ 
            id: 'try-it-content',
            type: 'Text',
            content: 'Try different actions like typing, selecting text, adding blocks, or moving blocks to see the events triggered.',
            styles: {
                bold: true,
                bgColor: '#999999'
            }
        }]
    }
]
