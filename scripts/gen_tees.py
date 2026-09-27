import json, os
ROOT = os.path.join(os.path.dirname(__file__), '..')

def rgb(h): h=h.lstrip('#'); return [int(h[i:i+2],16) for i in (0,2,4)]
def hx(c): return '#%02x%02x%02x' % tuple(max(0,min(255,int(v))) for v in c)
def shade(h,a):
    c=rgb(h); t=255 if a>0 else 0; return hx([v+(t-v)*abs(a) for v in c])
def lum(h): return sum(rgb(h))/3

BODY = "M232 152 L152 172 Q92 192 72 262 L60 334 L132 354 L152 292 L152 372 Q152 664 152 664 Q300 686 448 664 Q448 664 448 372 L448 292 L468 354 L540 334 L528 262 Q508 192 448 172 L368 152 Q300 190 232 152 Z"

def base_svg(bg, base, dark_bg=False):
    hangc = '#caa15a'
    line_c = 'rgba(0,0,0,.30)' if not dark_bg else 'rgba(255,255,255,.14)'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="600" height="750"><defs>
<linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{shade(bg,.22)}"/><stop offset=".55" stop-color="{bg}"/><stop offset="1" stop-color="{shade(bg,-.16)}"/></linearGradient>
<linearGradient id="sh" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".32"/><stop offset=".24" stop-color="#000" stop-opacity=".05"/><stop offset=".58" stop-color="#fff" stop-opacity=".08"/><stop offset="1" stop-color="#000" stop-opacity=".32"/></linearGradient>
<linearGradient id="sv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".08"/><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".2"/></linearGradient>
<pattern id="wv" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M0 .5H5M.5 0V5" stroke="#000" stroke-opacity=".05" stroke-width="1"/></pattern>
<clipPath id="cp"><path d="{BODY}"/></clipPath>
<filter id="bl"><feGaussianBlur stdDeviation="10"/></filter>
</defs>
<rect width="600" height="750" fill="url(#bg)"/>
<rect x="0" y="0" width="210" height="750" fill="#000" opacity="{".22" if dark_bg else ".05"}"/>
<rect x="390" y="0" width="210" height="750" fill="#000" opacity="{".22" if dark_bg else ".05"}"/>
<ellipse cx="300" cy="686" rx="205" ry="15" fill="#000" opacity=".3" filter="url(#bl)"/>
<path d="M300 108 L300 84 Q300 62 318 62 Q336 62 336 80" fill="none" stroke="{hangc}" stroke-width="6" stroke-linecap="round"/>
<path d="M300 104 L204 150 L396 150 Z" fill="none" stroke="{hangc}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>
<g clip-path="url(#cp)">'''

def base_close(base, mode='solid', c2=None):
    line_c='rgba(0,0,0,.30)'
    body=''
    if mode=='solid':
        body=f'<rect x="0" y="0" width="600" height="750" fill="{base}"/>'
    elif mode=='block':
        body=(f'<rect x="0" y="0" width="600" height="750" fill="{base}"/>'
              f'<path d="M60 334 L132 354 L152 292 L152 664 L232 664 L232 152 L152 172 Q92 192 72 262Z" fill="{c2}"/>'
              f'<path d="M540 334 L468 354 L448 292 L448 664 L368 664 L368 152 L448 172 Q508 192 528 262Z" fill="{c2}"/>')
    elif mode=='colorway':
        body=(f'<rect x="0" y="0" width="600" height="440" fill="{base}"/>'
              f'<rect x="0" y="440" width="600" height="310" fill="{c2}"/>')
    return (body + '<rect width="600" height="750" fill="url(#wv)"/>'
            '<rect width="600" height="750" fill="url(#sh)"/><rect width="600" height="750" fill="url(#sv)"/>'
            '<g fill="none" stroke="#000" stroke-opacity=".06" stroke-width="4" stroke-linecap="round"><path d="M198 300 Q220 460 205 630"/><path d="M402 300 Q380 460 395 630"/></g>'
            '<g fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="4" stroke-linecap="round"><path d="M250 310 Q262 470 250 620"/></g>'
            '</g>'
            f'<path d="{BODY}" fill="none" stroke="{line_c}" stroke-width="2.4" stroke-linejoin="round"/>'
            f'<path d="M232 152 Q300 200 368 152 L372 172 Q300 220 228 172Z" fill="#000" opacity=".16"/>'
            f'<path d="M232 152 Q300 194 368 152" fill="none" stroke="{line_c}" stroke-width="2"/>')

def txt_center(t, size=44, y=330, weight=800, ls=1, font="Arial Black, Impact, sans-serif", color="#fff", anchor="middle", x=300):
    return f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-family="{font}" font-size="{size}" font-weight="{weight}" letter-spacing="{ls}" fill="{color}">{t}</text>'

def chest_logo(color):
    return f'<circle cx="252" cy="222" r="16" fill="none" stroke="{color}" stroke-width="2.4"/><text x="252" y="229" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="14" font-weight="800" fill="{color}">AR</text>'

def line_icon(kind, color):
    s=f'<g fill="none" stroke="{color}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" transform="translate(300,300)">'
    if kind=='mountain': s+='<path d="M-90 60 L-30 -40 L10 20 L50 -70 L100 60 Z"/><circle cx="60" cy="-90" r="14"/>'
    elif kind=='bolt': s+='<path d="M10 -100 L-60 20 L-10 20 L-25 100 L70 -30 L15 -30 Z" fill="'+color+'" stroke="none"/>'
    elif kind=='wave': s+='<path d="M-110 20 Q-70 -30 -30 20 T50 20 T130 20"/><path d="M-110 60 Q-70 10 -30 60 T50 60 T130 60"/>'
    elif kind=='star': s+='<path d="M0 -100 L24 -30 L100 -30 L38 14 L60 90 L0 42 L-60 90 L-38 14 L-100 -30 L-24 -30 Z" fill="'+color+'" stroke="none"/>'
    elif kind=='sun': s+='<circle r="42"/>' + ''.join(f'<path d="M0 -70 L0 -95" transform="rotate({a})"/>' for a in range(0,360,30))
    elif kind=='arrow': s+='<path d="M-90 0 H80 M40 -40 L90 0 L40 40"/>'
    elif kind=='wolf': s+='<path d="M-70 60 L-40 -30 L-10 0 L20 -60 L40 -10 L70 60 Z"/>'
    elif kind=='moon': s+='<path d="M0 -70 A70 70 0 1 0 0 70 A70 70 0 1 0 0 -70 M22 -62 A62 62 0 1 0 22 62 A80 80 0 1 1 22 -62Z" fill="'+color+'" stroke="none" fill-rule="evenodd"/>'
    elif kind=='tiger':
        lc = '#f4f0e8' if lum(color) < 128 else '#141414'
        s+=('<path d="M-50 -95 L-25 -55 L-55 -50 Z" fill="'+color+'"/><path d="M50 -95 L25 -55 L55 -50 Z" fill="'+color+'"/>'
            '<path d="M0 -70 Q60 -70 62 -5 Q64 55 30 78 Q0 92 -30 78 Q-64 55 -62 -5 Q-60 -70 0 -70Z" fill="'+color+'"/>'
            f'<path d="M-8 5 L8 5 L0 22Z" fill="{lc}"/>'
            f'<circle cx="-24" cy="-15" r="7" fill="{lc}"/><circle cx="24" cy="-15" r="7" fill="{lc}"/>'
            f'<g stroke="{lc}" stroke-width="6" stroke-linecap="round">'
            '<path d="M-58 -35 L-30 -38 M-58 -18 L-32 -22 M58 -35 L30 -38 M58 -18 L32 -22"/>'
            '<path d="M-14 -55 L-10 -30 M14 -55 L10 -30 M-30 40 L-14 30 M30 40 L14 30 M0 45 L0 65"/>'
            '<path d="M-6 25 L-22 42 M6 25 L22 42"/></g>')
    elif kind=='skullcrown':
        s+=('<path d="M-45 -10 Q-45 -70 0 -70 Q45 -70 45 -10 Q45 30 25 40 L25 55 L10 45 L0 58 L-10 45 L-25 55 L-25 40 Q-45 30 -45 -10Z" fill="'+color+'" stroke="none"/>'
            '<circle cx="-18" cy="-15" r="9" fill="#000"/><circle cx="18" cy="-15" r="9" fill="#000"/>'
            '<path d="M0 -2 L-6 14 L6 14Z" fill="#000"/>'
            '<path d="M-16 30 h32 M-12 30 v8 M0 30 v8 M12 30 v8" stroke="#000" stroke-width="4"/>'
            '<path d="M-38 -68 L-28 -95 L-14 -75 L0 -100 L14 -75 L28 -95 L38 -68 Z" fill="none" stroke="'+color+'" stroke-width="7" stroke-linejoin="round"/>')
    elif kind=='heartbeat':
        s+=('<path d="M-115 0 H-55 L-40 -35 L-20 45 L0 -60 L15 0 H30 L45 -20 L60 0 H115" stroke="'+color+'" stroke-width="7" fill="none" stroke-linejoin="round" stroke-linecap="round"/>'
            '<path d="M-10 8 q10 -14 20 0 q10 14 20 0" fill="none" stroke="'+color+'" stroke-width="5" opacity=".85"/>')
    elif kind=='reaper':
        s+=('<path d="M0 -100 Q60 -75 58 -5 Q56 60 34 100 L28 78 L14 100 L4 76 L-6 100 L-16 78 L-30 100 Q-58 55 -58 -8 Q-58 -75 0 -100Z" fill="'+color+'" stroke="none"/>'
            '<path d="M-26 -25 Q0 -45 26 -25 Q26 12 0 22 Q-26 12 -26 -25Z" fill="#0a0a0a"/>'
            '<circle cx="-11" cy="-14" r="5.5" fill="'+color+'"/><circle cx="11" cy="-14" r="5.5" fill="'+color+'"/>'
            '<path d="M-6 2 L-1 -6 L6 2" stroke="'+color+'" stroke-width="3" fill="none"/>'
            '<path d="M-8 8 L-3 4 L3 4 L8 8" stroke="'+color+'" stroke-width="3" fill="none"/>'
            '<path d="M46 -108 L-56 112" stroke="#0a0a0a" stroke-width="7" stroke-linecap="round"/>'
            '<path d="M46 -108 Q60 -122 74 -108 Q60 -94 46 -108Z" fill="#0a0a0a"/>')
    s+='</g>'
    return s

def build(p):
    bg = p['bg']; base=p['color']; dark = lum(base) < 120
    out = base_svg(bg, base, dark_bg=lum(bg)<110)
    out += base_close(base, p.get('mode','solid'), p.get('c2'))
    tc = '#f4f0e8' if dark else '#17181a'
    ac = p.get('accent', tc)
    g = p.get('graphic')
    if g == 'wordmark':
        out += chest_logo(ac)
        out += txt_center(p['word'], size=p.get('size',50), y=340, ls=p.get('ls',2), color=tc)
        if p.get('sub'): out += txt_center(p['sub'], size=15, y=372, weight=700, ls=6, color=ac)
    elif g == 'stack':
        out += chest_logo(ac)
        lines = p['lines']
        y0 = 310
        for i,l in enumerate(lines):
            out += txt_center(l, size=p.get('size',34), y=y0+i*40, ls=1, color=tc if i%2==0 else ac)
    elif g == 'icon':
        out += line_icon(p['icon'], ac)
        if p.get('sub'): out += txt_center(p['sub'], size=15, y=420, weight=800, ls=5, color=ac)
    elif g == 'patch':
        out += (f'<rect x="235" y="270" width="130" height="130" rx="6" fill="{ac}" opacity=".92"/>'
                f'<rect x="235" y="270" width="130" height="130" rx="6" fill="none" stroke="{tc}" stroke-width="2" opacity=".5"/>'
                + txt_center(p['word'], size=26, y=345, color=tc, weight=800))
        out += chest_logo(ac)
    elif g == 'chestonly':
        out += chest_logo(ac)
    out += '</svg>'
    return out

P = [
 dict(id='t01',name='Midnight Navy Oversized Tee',cat='Plain Tee',color='#1c2740',bg='#c9c2b3',price=999,fabric='240 GSM Cotton',colorName='Navy',graphic='chestonly'),
 dict(id='t02',name='Stone Grey Oversized Tee',cat='Plain Tee',color='#8a8780',bg='#d9d2c2',price=949,fabric='220 GSM Cotton',colorName='Stone Grey',graphic='chestonly'),
 dict(id='t03',name='Jet Black Essential Tee',cat='Plain Tee',color='#141414',bg='#c7bfae',price=899,fabric='220 GSM Cotton',colorName='Black'),
 dict(id='t04',name='Off-White Essential Tee',cat='Plain Tee',color='#efe9dc',bg='#8d97a8',price=899,fabric='220 GSM Cotton',colorName='Off-White'),
 dict(id='t05',name='Olive Oversized Tee',cat='Plain Tee',color='#586b3f',bg='#e0d6c0',price=999,fabric='240 GSM Cotton',colorName='Olive',graphic='chestonly'),
 dict(id='t06',name='Rust Brown Oversized Tee',cat='Plain Tee',color='#8a4a30',bg='#dcd2bd',price=999,fabric='240 GSM Cotton',colorName='Rust',graphic='chestonly'),
 dict(id='t07',name='Cream Beige Tee',cat='Plain Tee',color='#e6d9bd',bg='#8d8377',price=949,fabric='220 GSM Cotton',colorName='Beige'),
 dict(id='t08',name='Charcoal Two-Tone Tee',cat='Plain Tee',color='#232323',bg='#c8c0b0',price=1099,fabric='240 GSM Cotton',colorName='Charcoal / Grey',mode='block',c2='#5c5c5c'),
 dict(id='t09',name='Maroon Two-Tone Tee',cat='Plain Tee',color='#4a1420',bg='#d6cdbd',price=1099,fabric='240 GSM Cotton',colorName='Maroon / Black',mode='block',c2='#161616'),
 dict(id='t10',name='Navy Colourblock Tee',cat='Plain Tee',color='#1c2740',bg='#c9c2b3',price=1149,fabric='240 GSM Cotton',colorName='Navy / Sand',mode='colorway',c2='#c9a86a'),
 dict(id='t11',name='Night Drive Graphic Tee',cat='Graphic Tee',color='#141414',bg='#c7bfae',price=1399,fabric='220 GSM Cotton',colorName='Black',graphic='wordmark',word='NIGHT DRIVE',sub='EST. AR STORE',size=40,ls=1,accent='#e50000'),
 dict(id='t12',name='Urban Wolf Graphic Tee',cat='Graphic Tee',color='#1e1e1e',bg='#cfc7ba',price=1399,fabric='220 GSM Cotton',colorName='Black',graphic='icon',icon='wolf',sub='URBAN PACK',accent='#e50000'),
 dict(id='t13',name='Lightning Bolt Tee',cat='Graphic Tee',color='#efe9dc',bg='#3d4a63',price=1349,fabric='220 GSM Cotton',colorName='White',graphic='icon',icon='bolt',sub='HIGH VOLTAGE',accent='#e50000'),
 dict(id='t14',name='Desert Sun Graphic Tee',cat='Graphic Tee',color='#c79a2b',bg='#3d4a63',price=1349,fabric='220 GSM Cotton',colorName='Mustard',graphic='icon',icon='sun',sub='GOLDEN HOUR',accent='#141414'),
 dict(id='t15',name='Mountain Line Tee',cat='Graphic Tee',color='#2b3b52',bg='#d8cdb6',price=1349,fabric='220 GSM Cotton',colorName='Slate Blue',graphic='icon',icon='mountain',sub='STAY WILD',accent='#efe9dc'),
 dict(id='t16',name='Wave Break Graphic Tee',cat='Graphic Tee',color='#123a4a',bg='#d8cdb6',price=1349,fabric='220 GSM Cotton',colorName='Teal Navy',graphic='icon',icon='wave',sub='NO BAD DAYS',accent='#efe9dc'),
 dict(id='t17',name='Crescent Moon Tee',cat='Graphic Tee',color='#141414',bg='#c7bfae',price=1399,fabric='220 GSM Cotton',colorName='Black',graphic='icon',icon='moon',sub='NIGHT OWL',accent='#e6d200'),
 dict(id='t18',name='North Star Graphic Tee',cat='Graphic Tee',color='#1c2740',bg='#c9c2b3',price=1399,fabric='220 GSM Cotton',colorName='Navy',graphic='icon',icon='star',sub='CHASE IT',accent='#efe9dc'),
 dict(id='t19',name='Arrow Forward Tee',cat='Graphic Tee',color='#efe9dc',bg='#8d97a8',price=1349,fabric='220 GSM Cotton',colorName='White',graphic='icon',icon='arrow',sub='KEEP MOVING',accent='#141414'),
 dict(id='t20',name='07 Varsity Graphic Tee',cat='Graphic Tee',color='#4a1420',bg='#d6cdbd',price=1449,fabric='220 GSM Cotton',colorName='Maroon',graphic='wordmark',word='07',sub='VARSITY CLUB',size=90,accent='#efe9dc'),
 dict(id='t21',name='Elevate Typography Tee',cat='Graphic Tee',color='#141414',bg='#c7bfae',price=1449,fabric='220 GSM Cotton',colorName='Black',graphic='stack',lines=['ELEVATE','YOUR','STANDARD'],size=30,accent='#e50000'),
 dict(id='t22',name='AR Patch Pocket Tee',cat='Graphic Tee',color='#8a8780',bg='#d9d2c2',price=1299,fabric='220 GSM Cotton',colorName='Grey',graphic='patch',word='AR',accent='#141414'),
 dict(id='t23',name='Signal Red Graphic Tee',cat='Graphic Tee',color='#c40d12',bg='#2a2a2c',price=1399,fabric='220 GSM Cotton',colorName='Red',graphic='wordmark',word='AR STORE',size=32,ls=3,sub='PAKISTAN',accent='#efe9dc'),
 dict(id='t24',name='Forest Camo Colourblock Tee',cat='Plain Tee',color='#3a4a34',bg='#d8cdb6',price=1199,fabric='240 GSM Cotton',colorName='Forest / Khaki',mode='colorway',c2='#8a8067'),
]
DESC = {
 'Plain Tee': 'Oversized fit tee in soft heavyweight cotton. Drop-shoulder cut, ribbed crew neck, holds shape wash after wash.',
 'Graphic Tee': 'Oversized graphic tee with a front print and AR Store neck label. Heavyweight cotton, drop-shoulder streetwear fit.',
}
if __name__=='__main__':
    os.makedirs(os.path.join(ROOT,'public/products/gen'),exist_ok=True)
    items=[]
    for p in P:
        fn=f"{p['id']}.svg"
        open(os.path.join(ROOT,'public/products/gen',fn),'w').write(build(p))
        items.append(dict(name=p['name'],category=p['cat'],price=p['price'],color=p['colorName'],fabric=p['fabric'],
            sizes=['S','M','L','XL'],image=f'/products/gen/{fn}',description=DESC[p['cat']]))
    print(len(items))
    json.dump(items, open('/tmp/gen_items.json','w'))
