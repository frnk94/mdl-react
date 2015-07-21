var items = [
    <a href='#'>Link 1</a>,
    <a href='#'>Link 2</a>,
    <a href='#'>Link 3</a>,
];

<MDL.Layout
    title='Fixed header and drawer without title'
    href='#'
    isFixedHeader={true}
    headerItems={items}
    drawerItems={items}
    noDrawerTitle={true}
>
    put your content here
</MDL.Layout>
