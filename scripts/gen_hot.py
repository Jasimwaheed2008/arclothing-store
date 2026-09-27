import json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from gen_tees import base_svg, base_close, line_icon, lum, ROOT

def build_hot(p):
    bg = p['bg']; base = p['color']
    out = base_svg(bg, base, dark_bg=lum(bg) < 110)
    out += base_close(base, 'solid')
    ac = p['accent']
    out += line_icon(p['icon'], ac)
    out += f'<text x="300" y="440" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-size="16" font-weight="800" letter-spacing="5" fill="{ac}">{p["sub"]}</text>'
    out += '</svg>'
    return out

HOT = [
 dict(id='h01', name='Skull Crown Graphic Tee', color='#141414', bg='#c7bfae', icon='skullcrown', sub='ROYAL BONES', accent='#efe9dc', price=1600, mrp=3000, fabric='240 GSM Cotton', colorName='Black'),
 dict(id='h02', name='Tiger Prowl Graphic Tee', color='#efe9dc', bg='#2a2a2c', icon='tiger', sub='APEX PREDATOR', accent='#141414', price=1550, mrp=3000, fabric='240 GSM Cotton', colorName='White'),
 dict(id='h03', name='Heartbeat AR Monogram Tee', color='#141414', bg='#c7bfae', icon='heartbeat', sub='ALIVE', accent='#e50000', price=1500, mrp=3000, fabric='240 GSM Cotton', colorName='Black'),
 dict(id='h04', name='No Mercy Reaper Tee', color='#1b1b1b', bg='#c7bfae', icon='reaper', sub='NO MERCY', accent='#e50000', price=1600, mrp=3000, fabric='240 GSM Cotton', colorName='Black'),
]
DESC = 'Oversized graphic tee with a bold front print and AR Store neck label. Heavyweight cotton, drop-shoulder streetwear fit.'

if __name__ == '__main__':
    os.makedirs(os.path.join(ROOT, 'public/products/gen'), exist_ok=True)
    items = []
    for p in HOT:
        fn = f"{p['id']}.svg"
        open(os.path.join(ROOT, 'public/products/gen', fn), 'w').write(build_hot(p))
        items.append(dict(name=p['name'], category='Graphic Tee', price=p['price'], mrp=p['mrp'],
            color=p['colorName'], fabric=p['fabric'], sizes=['S','M','L','XL'],
            image=f'/products/gen/{fn}', description=DESC))
    json.dump(items, open('/tmp/hot_items.json', 'w'))
    print(len(items))
