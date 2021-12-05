const EXAMPLES = {
    amazon: 'http://www.amazon.ca/gp/redirect.html?ie=UTF8&location=https%3A%2F%2Fwww.amazon.ca%2F3005744%2Fdp%2FB08J67R38G%2Fref%3Dmp_s_a_1_7%3Fcrid%3D2VFKGVS96JX09%26keywords%3Dps5%2Bgames%26qid%3D1638670939%26sprefix%3Dps5%252Caps%252C87%26sr%3D8-7&tag=redflagdealsc-20&linkCode=ur2&camp=15121&creative=330641',
    walmart: 'http://click.linksynergy.com/deeplink?id=CAqD7bLWUPI&mid=36751&murl=https%3A%2F%2Fwww.walmart.ca%2Fen%2Fip%2Fcadbury-dairy-milk-milk-chocolate-850-g%2F6000188672312&u1=rfdcb',
    newegg: 'http://click.linksynergy.com/deeplink?id=CAqD7bLWUPI&mid=44589&murl=https%3A%2F%2Fwww.newegg.ca%2Fblack-beyerdynamic-710490-over-the-ear%2Fp%2F0TH-00JD-000R7%3Fitem%3D0TH-00JD-000R7&u1=rfdcb',
    chapters: 'http://www.jdoqocy.com/click-749547-10437934?url=https%3A%2F%2Fwww.chapters.indigo.ca%2Fen-ca%2Ftoys%2Fkidkraft-play-kitchen-elephant%2F706943201664-item.html%3Fs_campaign%3Dgoo-DSA_Toys%26gclid%3DCj0KCQiA-qGNBhD3ARIsAO_o7ymeNxn4cWEJbGe8dolnLU-39P97jqyw-W-sYGIa22rtqEaGkZya3uoaArj-EALw_wcB%26gclsrc%3Daw.ds&sid=rfdcb',
    homedepot: 'https://the-home-depot-ca.pxf.io/c/341376/583694/9526?u=https://www.homedepot.ca/product/kreg-tool-company-kreg-720pro-pocket-hole-jig/1001619503',
    lenovo: 'http://lenovo.evyy.net/c/341376/225728/3899?u=https%3A%2F%2Fwww.lenovo.com%2Fca%2Fen%2Fdc%2Fbackpacks%3Fsort%3DsortBy%26currentResultsLayoutType%3Dgrid',
    microsoft: 'http://click.linksynergy.com/deeplink?id=CAqD7bLWUPI&mid=36509&murl=https%3A%2F%2Fwww.microsoft.com%2Fen-ca%2Fd%2Fcontroller-gear-universal-xbox-pro-charging-stand-robot-white-latest-model%2F8pd7fxkhp5rw&u1=rfdcb',
    lowes: 'http://go.redirectingat.com/?id=2927x594702&xs=1&url=https%3A%2F%2Fwww.lowes.ca%2Fproduct%2Fgarage-door-openers%2Fchamberlain-125-hp-whisper-drive-belt-drive-garage-door-opener-with-bui',
    marks: 'http://marks.pxf.io/c/341376/505590/8679?u=https%3A%2F%2Fwww.marks.com%2Fen%2Fbrands%2Fbench.html%3Flvp%3D1',
    canadiantire: 'https://imp.i347961.net/c/341376/1025915/11779?u=https://www.canadiantire.ca/en/pdp/simoniz-tri-pad-polisher-0396506p.html#srp',
    thesource: 'http://www.dpbolvw.net/click-749547-10797598?url=https%3A%2F%2Fwww.thesource.ca%2Fen-ca%2Fgaming%2Fxbox%2Fall-xbox-series-x-s-%2Fxbox-series-x-console%2Fp%2F108090646&sid=rfdcb',
    bestbuy: 'https://bestbuyca.o93x.net/c/341376/644465/10221?u=https://www.bestbuy.ca/en-ca/event/xbox-all-access-series-x-pricing-and-details-information/blt35d6719f8454a13b?icmp=xbox_all_access_story_series_x_pricing_details',
    staples: 'https://staplescanada.4u8mqw.net/c/341376/755401/10903?u=https://www.staples.ca/products/3012653-en-hp-deskjet-3752-all-in-one-printer',
    dell: 'http://www.anrdoezrs.net/click-749547-12105225?url=https%3A%2F%2Fwww.dell.com%2Fen-ca%2Fshop%2Fdell-34-curved-gaming-monitor-s3422dwg%2Fapd%2F210-azep%2Fmonitors-monitor-accessories&sid=rfdcb',
    samsung: 'https://www.awin1.com/cread.php?awinmid=18530&awinaffid=139736&clickref=&p=https://shop.samsung.com/ca/multistore/caepp/education/Products/Tablets/Galaxy-Tab-S7%2B-Wi-Fi/p/SM-T970NZNAXAC',
    aliexpress: 'http://www.awin1.com/cread.php?awinmid=6378&awinaffid=139736&clickref=&p=https://www.aliexpress.com/item/33030968874.html?spm=a2g0o.store_pc_groupList.8148356.1.16212130HX36Q7'
}