const array = [{
        name: 'Volkswagen',
        children: [{
                name: 'Passat',
                children: [{
                        name: 'B5'
                    },
                    {
                        name: 'B6'
                    }
                ]
            },
            {
                name: 'Caddy',
            }
        ]
    },
    {
        name: 'Mercedes',
        children: [{
                name: 'CLA'
            },
            {
                name: 'CLS'
            },
            {
                name: 'AMG'
            }
        ]
    },
    {
        name: 'Ford',
        children: [{
                name: 'Mondeo'
            },
            {
                name: 'Focus',
                children: [{
                        name: '2'
                    },
                    {
                        name: '3'
                    }
                ]
            }
        ]
    }
];

function createTree(data) {
    const ul = document.createElement('ul');

    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;

        if (item.children) {
            li.appendChild(createTree(item.children));
            li.insertAdjacentHTML('afterbegin', '<span>+ </span>');
        };

        ul.appendChild(li);
    });

    return ul;
}

document.getElementById('menu').appendChild(createTree(array));

const test = (function(){
    let li = document.getElementsByTagName('li');
    for(let i=0; i<li.length; i++){   
        let span = li[i].firstChild;     
        let element = li[i].lastChild;

        if(element.style){
            element.style.display = 'none';
        }

        li[i].onclick = function(e){
            e.stopPropagation();
            if(element.style){
                if (element.style.display === 'none'){
                    element.style.display = 'block';
                    span.innerHTML = '- ';
                } else {
                    element.style.display = 'none';
                    span.innerHTML = '+ ';
                }
            }
        }
    }
})();