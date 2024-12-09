# Notes

This section is made to record the notes taken throughout the course.

## Table Of Content

- [How to create Next.js project](#how-to-create-next.js-project)

- [Make smaller components](#make-smaller-components)

## How to create Next.js project

`npx create-next-app@latest`

## Make big components with smaller components

It's important to separate the components in different smaller compontents to make big and more complex components:

`Navbar` has smaller components inside itself: `SearchFilters`, `UserNav`, `Add PropertyButton`

This helps to create **scalable** and **maintainable** apps.

## Next.js Images
The `sizes` property in Next.js Image Component is usefull for rendering the image in different sizes based on the viewport screen, just like the media queries:

`<Image
                    fill
                    src='/house-beach.jpg'
                    sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                    className="hover:scale-110 object-cover transition size-full"
                    alt="Beach house"
                    priority={true}
                />`

I'm gonna search more about this.

## Next.js Routing

For routing different pages in Next.js we use folders and for dynamic routes we use `[param]`. Example:
- **app/properties/[id]/page.tsx** -> This is a page for the follow url: /properties/param where 'param' is a param about an id of a property.

We can use folder routing to make more pages.
