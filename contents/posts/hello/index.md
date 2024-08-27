---
title: "My First Post"
date: "2024-06-27"
series: "hello world"
icon: "TbAlienFilled"
tags:
  - Gatsby
  - JavaScript
---

# Gatsby Transformer Remark - Markdown 지원 기능

## 1. 헤더 (Headers)

# H1

## H2

### H3

#### H4

##### H5

###### H6

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

## 2. 리스트 (Lists)

- test

  - test
    - test
      - test
        - test
          - test

- **순서가 있는 리스트 (Ordered Lists)**:

  1. First item
  2. Second item
  3. Third item
  4. qwe
  5. qwe
  6. qwe
  7. qwe
  8. qwe
  9. qwe
  10. qwd
  11. qwe

  ```markdown
  1. First item
  2. Second item
  3. Third item
  ```

- **순서가 없는 리스트 (Unordered Lists)**:

  - First item
  - Second item
  - Third item

  ```markdown
  - First item
  - Second item
  - Third item
  ```

## 3. 링크 (Links)

- **기본 링크**:

  [Link text](https://example.com)

  ```markdown
  [Link text](https://example.com)
  ```

- **참조 링크**:

  [Link text][1]
  [1]: https://example.com

  ```markdown
  [Link text][1]
  [1]: https://example.com
  ```

## 4. 이미지 (Images)

- **기본 이미지**:

![This is a local picture](image-1.png)

![This is not a local picture](https://fastly.picsum.photos/id/67/2848/4288.jpg?hmac=X_Z0Wdd3HiJ8eWT0ohdmpRSIA6e6s265INUMuHA8MqA)

```markdown
![This is not a local picture](https://example.com/image.jpg)
```

## 5. 텍스트 스타일링 (Text Styling)

- **굵게 (Bold)**:

  **bold text**

  ```markdown
  **bold text**
  ```

- **기울임 (Italic)**:

  _italic text_

  ```markdown
  _italic text_
  ```

- **취소선 (Strikethrough)**:

  ~~strikethrough~~

  ```markdown
  ~~strikethrough~~
  ```

- **인라인 코드 (Inline Code)**:

  `inline code`

  # `inline code` test

  ## `inline code` test

  ### `inline code` test

  #### `inline code` test

  ##### `inline code` test

  ###### `inline code` test

  ```markdown
  `inline code`
  ```

## 6. 코드 블록 (Code Blocks)

- **백틱 코드 블록**:

  ```markdown

  ```

  code block

  ```

  ```

- **언어 지정 코드 블록**:

```javascript
function solution(cookie) {
    let result = 0;
    for(let i = 0; i < cookie.length - 1; i++) {
        let cookieSet = new Set(), left = 0, right = 0;
        for(let j = i; j >= 0; j--) {
            left += cookie[j];
            cookieSet.add(left);
        }
        for(let j = i + 1; j < cookie.length; j++) {
            right += cookie[j];
            if(cookieSet.has(right)) result = Math.max(result, right);
        }
        if(result >= cookie)
    }
    return result;
}
```

````markdown
```javascript
const hello = "world"
```
````

```

```

## 7. 인용구 (Blockquotes)

> This is a blockquote This is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquoteThis is a blockquote

- **기본 인용구**:

  > This is a blockquote

> aioefaoiejfow
>
> > qwdqwd
> >
> > > qwdqwd

```markdown
> This is a blockquote
```

## 8. 표 (Tables)

| **Header 1** | Header 2 |
| ------------ | -------- |
| Row 1        | `Data 1` |
| Row 2        | Data 2   |

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Row 1    | Data 1   |
| Row 2    | Data 2   |
```

## 9. 수평선 (Horizontal Rules)

---

```markdown
---
```

## 10. 인라인 HTML (Inline HTML)

<div>
  This is a div element
</div>

```markdown
<div>
  This is a div element
</div>
```

## 11. 자동 링크 (Autolinks)

- **URL**:

  <https://example.com>

  ```markdown
  <https://example.com>
  ```

- **이메일**:

  <email@example.com>

  ```markdown
  <email@example.com>
  ```

## 12. 탈출 문자 (Escaping)

- **백슬래시를 사용해 특정 문자를 탈출**:

  \*This text will not be italic\*

  ```markdown
  \*This text will not be italic\*
  ```

## 13. 테스크 리스트 (Task Lists)

- **체크박스 목록**:

  - [x] Task 1
  - [ ] Task 2
  - [ ] Task 3

  ```markdown
  - [x] Task 1
  - [ ] Task 2
  - [ ] Task 3
  ```

## 14. Footnotes

Here is a footnote reference[^1].

[^1]: Here is the footnote.

```markdown
Here is a footnote reference[^1].

[^1]: Here is the footnote.
```

## 18. Custom Plugins

Gatsby에서 `gatsby-transformer-remark`와 함께 다양한 Remark 플러그인을 사용할 수 있습니다. 이를 통해 추가적인 기능을 지원할 수 있습니다 (예: `gatsby-remark-prismjs`로 코드 블록에 대한 문법 강조).

<br/>
