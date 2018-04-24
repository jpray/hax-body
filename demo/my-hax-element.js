(function(){

  let props = {
          'canScale': true,
          'canPosition': true,
          'canEditSource': true,
          'gizmo': {
            'title': 'My Hax Element',
            'description': 'Is a hello world example for hax',
            'icon': 'editor:format-quote',
            'color': 'grey',
            'groups': ['Content', 'Presentation'],
            'handles': [
              {
                'type': 'content',
                'caption': 'quote',
                'title': 'citation',
                'description': 'quote',
                'citation': 'citation',
                'color': 'colorCode'
              }
            ],
            'meta': {
              'author': 'LRNWebComponents'
            }
          },
          'settings': {
            'quick': [
              {
                'property': 'colorCode',
                'title': 'Background color',
                'description': 'Select the background color for the quote.',
                'inputMethod': 'colorpicker',
                'icon': 'editor:format-color-fill',
              },
              {
                'property': 'outset',
                'title': 'Outset',
                'description': 'Should this expand beyond it\'s container by design?',
                'inputMethod': 'boolean',
                'icon': 'editor:border-outer',
              },
              {
                'property': 'decorate',
                'title': 'Glyph decoration',
                'description': 'Add a fancy " quotation mark off the left side.',
                'inputMethod': 'boolean',
                'icon': 'editor:format-quote',
              }
            ],
            'configure': [
              {
                'slot': '',
                'title': 'My Hax Element',
                'description': 'hello world',
                'inputMethod': 'textfield',
                'icon': 'editor:format-quote',
                'required': true,
                'validationType': 'text',
              },
              {
                'property': 'citation',
                'title': 'Citation',
                'description': '',
                'inputMethod': 'textfield',
                'icon': 'editor:short-text',
                'required': false,
                'validationType': 'text',
              },
              {
                'property': 'outset',
                'title': 'Outset',
                'description': 'Should this expand beyond it\'s container by design?',
                'inputMethod': 'boolean',
                'icon': 'editor:border-outer',
              },
              {
                'property': 'decorate',
                'title': 'Glyph decoration',
                'description': 'Add a fancy " quotation mark off the left side.',
                'inputMethod': 'boolean',
                'icon': 'editor:format-quote',
              },
              {
                'property': 'colorCode',
                'title': 'Background color',
                'description': 'Select the background color for the quote.',
                'inputMethod': 'colorpicker',
                'icon': 'editor:format-color-fill',
              },
              {
                'property': 'depth',
                'title': 'Shadow depth',
                'description': 'Select the background color for the quote.',
                'inputMethod': 'select',
                'icon': 'maps:layers',
                'options': {
                  '0': 'none',
                  '1': 'Level 1',
                  '2': 'Level 2',
                  '3': 'Level 3',
                  '4': 'Level 4',
                  '5': 'Level 5'
                },
              }
            ],
            'advanced': [
            ]
          }
        };

  class MyHaxElement extends HTMLElement {
    constructor() {
      super();
      this.hasBeenConnected = false;
      Object.assign(this, window.HAXBehaviors.PropertiesBehaviors);
    }
    connectedCallback() {
      this.hasBeenConnected = true;
      this.render();
      debugger;
      //this.setHaxProperties = window.HAXBehaviors.PropertiesBehaviors.setHaxProperties.bind(this);
      this.setHaxProperties(props, 'my-hax-element');
    }
    fire(eventName, detail) {
      debugger;
      this.dispatchEvent(new CustomEvent(eventName, {
        bubbles:true,
        detail: detail
      }))
    }
    disconnectedCallback() {
      this.hasBeenConnected = false;
    }
    render() {
      this.innerHTML = `${this.hasBeenConnected ? 'I am connected' : 'I am not connected'}`;
    }
    attributeChangedCallback() {
      this.render();
    }
  }

  window.customElements.define('my-hax-element', MyHaxElement);

})();
