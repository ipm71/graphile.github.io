webpackJsonp([3265662318058],{436:function(e,t){e.exports={data:{remark:{html:'<h2 id="command-line-interface"><a href="#command-line-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Command Line Interface</h2>\n<p>The easiest way to get up and running with PostGraphile is to use the Command Line Interface.</p>\n<p>Install PostGraphile globally via npm:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> -g postgraphile</code></pre>\n      </div>\n<p>This will make the <code class="language-text">postgraphile</code> command available. You can then run:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">postgraphile -c postgres://localhost/mydb -s public -a -j</code></pre>\n      </div>\n<p>where <code class="language-text">-c</code> is the connection string (defaults to postgres://localhost/), <code class="language-text">-s</code> is the schema name (defaults to "public"), <code class="language-text">-a</code> enables Relay support and <code class="language-text">-j</code> enables dynamic JSON.</p>\n<h3 id="cli-options"><a href="#cli-options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CLI options</h3>\n<p>There are more CLI options available to customise the GraphQL server:</p>\n<!-- CLI_DOCBLOCK_BEGIN -->\n<ul>\n<li><code class="language-text">-V</code>, <code class="language-text">--version</code><br>\noutput the version number</li>\n<li><code class="language-text">--plugins &lt;string&gt;</code><br>\na list of postgraphile plugins (not Graphile-Build plugins) to load, MUST be the first option</li>\n<li><code class="language-text">-c</code>, <code class="language-text">--connection &lt;string&gt;</code><br>\nthe Postgres connection. if not provided it will be inferred from your environment, example: postgres://user:password@domain:port/db</li>\n<li><code class="language-text">-s</code>, <code class="language-text">--schema &lt;string&gt;</code><br>\na Postgres schema to be introspected. Use commas to define multiple schemas</li>\n<li><code class="language-text">-w</code>, <code class="language-text">--watch</code><br>\nwatches the Postgres schema for changes and reruns introspection if a change was detected</li>\n<li><code class="language-text">-n</code>, <code class="language-text">--host &lt;string&gt;</code><br>\nthe hostname to be used. Defaults to <code class="language-text">localhost</code></li>\n<li><code class="language-text">-p</code>, <code class="language-text">--port &lt;number&gt;</code><br>\nthe port to be used. Defaults to 5000</li>\n<li><code class="language-text">-m</code>, <code class="language-text">--max-pool-size &lt;number&gt;</code><br>\nthe maximum number of clients to keep in the Postgres pool. defaults to 10</li>\n<li><code class="language-text">-r</code>, <code class="language-text">--default-role &lt;string&gt;</code><br>\nthe default Postgres role to use when a request is made. supercedes the role used to connect to the database</li>\n<li><code class="language-text">-j</code>, <code class="language-text">--dynamic-json</code><br>\n[RECOMMENDED] enable dynamic JSON in GraphQL inputs and outputs. PostGraphile uses stringified JSON by default</li>\n<li><code class="language-text">-N</code>, <code class="language-text">--no-setof-functions-contain-nulls</code><br>\n[RECOMMENDED] if none of your <code class="language-text">RETURNS SETOF compound_type</code> functions mix NULLs with the results then you may enable this to reduce the nullables in the GraphQL schema</li>\n<li><code class="language-text">-a</code>, <code class="language-text">--classic-ids</code><br>\nuse classic global id field name. required to support Relay 1</li>\n<li><code class="language-text">-M</code>, <code class="language-text">--disable-default-mutations</code><br>\ndisable default mutations, mutation will only be possible through Postgres functions</li>\n<li><code class="language-text">--simple-collections [omit|both|only]</code><br>\n"omit" (default) - relay connections only, "only" - simple collections only (no Relay connections), "both" - both</li>\n<li><code class="language-text">--no-ignore-rbac</code><br>\n[RECOMMENDED] set this to excludes fields, queries and mutations that the user isn\'t permitted to access; this will be the default in v5</li>\n<li><code class="language-text">--include-extension-resources</code><br>\nby default, tables and functions that come from extensions are excluded; use this flag to include them (not recommended)</li>\n<li><code class="language-text">--show-error-stack</code><br>\nshow JavaScript error stacks in the GraphQL result errors (recommended in development)</li>\n<li><code class="language-text">--extended-errors &lt;string&gt;</code><br>\na comma separated list of extended Postgres error fields to display in the GraphQL result. Recommended in development: \'hint,detail,errcode\'. Default: none</li>\n<li><code class="language-text">--append-plugins &lt;string&gt;</code><br>\na comma-separated list of plugins to append to the list of GraphQL schema plugins</li>\n<li><code class="language-text">--prepend-plugins &lt;string&gt;</code><br>\na comma-separated list of plugins to prepend to the list of GraphQL schema plugins</li>\n<li><code class="language-text">--read-cache &lt;path&gt;</code><br>\n[experimental] reads cached values from local cache file to improve startup time (you may want to do this in production)</li>\n<li><code class="language-text">--write-cache &lt;path&gt;</code><br>\n[experimental] writes computed values to local cache file so startup can be faster (do this during the build phase)</li>\n<li><code class="language-text">--export-schema-json &lt;path&gt;</code><br>\nenables exporting the detected schema, in JSON format, to the given location. The directories must exist already, if the file exists it will be overwritten.</li>\n<li><code class="language-text">--export-schema-graphql &lt;path&gt;</code><br>\nenables exporting the detected schema, in GraphQL schema format, to the given location. The directories must exist already, if the file exists it will be overwritten.</li>\n<li><code class="language-text">-X</code>, <code class="language-text">--no-server</code><br>\n[experimental] for when you just want to use --write-cache or --export-schema-* and not actually run a server (e.g. CI)</li>\n<li><code class="language-text">-q</code>, <code class="language-text">--graphql &lt;path&gt;</code><br>\nthe route to mount the GraphQL server on. defaults to <code class="language-text">/graphql</code></li>\n<li><code class="language-text">-i</code>, <code class="language-text">--graphiql &lt;path&gt;</code><br>\nthe route to mount the GraphiQL interface on. defaults to <code class="language-text">/graphiql</code></li>\n<li><code class="language-text">-b</code>, <code class="language-text">--disable-graphiql</code><br>\ndisables the GraphiQL interface. overrides the GraphiQL route option</li>\n<li><code class="language-text">-o</code>, <code class="language-text">--cors</code><br>\nenable generous CORS settings; disabled by default, if possible use a proxy instead</li>\n<li><code class="language-text">-l</code>, <code class="language-text">--body-size-limit &lt;string&gt;</code><br>\nset the maximum size of JSON bodies that can be parsed (default 100kB) The size can be given as a human-readable string, such as \'200kB\' or \'5MB\' (case insensitive).</li>\n<li><code class="language-text">--cluster-workers &lt;count&gt;</code><br>\n[experimental] spawn <count> workers to increase throughput</li>\n<li><code class="language-text">--enable-query-batching</code><br>\n[experimental] enable the server to process multiple GraphQL queries in one request</li>\n<li><code class="language-text">--disable-query-log</code><br>\ndisable logging queries to console (recommended in production)</li>\n<li><code class="language-text">-e</code>, <code class="language-text">--jwt-secret &lt;string&gt;</code><br>\nthe secret to be used when creating and verifying JWTs. if none is provided auth will be disabled</li>\n<li><code class="language-text">--jwt-verify-algorithms &lt;string&gt;</code><br>\na comma separated list of the names of the allowed jwt token algorithms</li>\n<li><code class="language-text">-A</code>, <code class="language-text">--jwt-verify-audience &lt;string&gt;</code><br>\na comma separated list of JWT audiences that will be accepted; defaults to \'postgraphile\'. To disable audience verification, set to \'\'.</li>\n<li><code class="language-text">--jwt-verify-clock-tolerance &lt;number&gt;</code><br>\nnumber of seconds to tolerate when checking the nbf and exp claims, to deal with small clock differences among different servers</li>\n<li><code class="language-text">--jwt-verify-id &lt;string&gt;</code><br>\nthe name of the allowed jwt token id</li>\n<li><code class="language-text">--jwt-verify-ignore-expiration</code><br>\nif <code class="language-text">true</code> do not validate the expiration of the token defaults to <code class="language-text">false</code></li>\n<li><code class="language-text">--jwt-verify-ignore-not-before</code><br>\nif <code class="language-text">true</code> do not validate the notBefore of the token defaults to <code class="language-text">false</code></li>\n<li><code class="language-text">--jwt-verify-issuer &lt;string&gt;</code><br>\na comma separated list of the names of the allowed jwt token issuer</li>\n<li><code class="language-text">--jwt-verify-subject &lt;string&gt;</code><br>\nthe name of the allowed jwt token subject</li>\n<li><code class="language-text">--jwt-role &lt;string&gt;</code><br>\na comma seperated list of strings that create a path in the jwt from which to extract the postgres role. if none is provided it will use the key <code class="language-text">role</code> on the root of the jwt.</li>\n<li><code class="language-text">-t</code>, <code class="language-text">--jwt-token-identifier &lt;identifier&gt;</code><br>\nthe Postgres identifier for a composite type that will be used to create JWT tokens</li>\n<li><code class="language-text">--token &lt;identifier&gt;</code><br>\nDEPRECATED: use --jwt-token-identifier instead</li>\n<li><code class="language-text">--secret &lt;string&gt;</code><br>\nDEPRECATED: Use --jwt-secret instead</li>\n<li><code class="language-text">--jwt-audiences &lt;string&gt;</code><br>\nDEPRECATED Use --jwt-verify-audience instead</li>\n<li><code class="language-text">--legacy-relations &lt;omit|deprecated|only&gt;</code><br>\nsome one-to-one relations were previously detected as one-to-many - should we export \'only\' the old relation shapes, both new and old but mark the old ones as \'deprecated\', or \'omit\' the old relation shapes entirely</li>\n<li><code class="language-text">--legacy-json-uuid</code><br>\nONLY use this option if you require the v3 typenames \'Json\' and \'Uuid\' over \'JSON\' and \'UUID\'</li>\n<li><code class="language-text">-h</code>, <code class="language-text">--help</code><br>\noutput usage information</li>\n</ul>\n<!-- CLI_DOCBLOCK_END -->\n<p>The following features and not part of PostGraphile core, but are available from the Supporter and/or Pro plugins - see <a href="/postgraphile/pricing/">Go Pro!</a> for more information.</p>\n<ul>\n<li><code class="language-text">-S</code>, <code class="language-text">--simple-subscriptions</code><br>\n[SUPPORTER] ⚡️[experimental] add simple subscription support</li>\n<li><code class="language-text">--subscription-authorization-function [fn]</code><br>\n[SUPPORTER] ⚡️[experimental] PG function to call to check user is allowed to subscribe</li>\n<li><code class="language-text">--read-only-connection &lt;string&gt;</code><br>\n[PRO] ⚡️[experimental] a PostgreSQL connection string to use for read-only queries (i.e. not mutations)</li>\n<li><code class="language-text">--default-pagination-cap [int]</code><br>\n[PRO] ⚡️[experimental] Ensures all connections have first/last specified and are no large than this value (default: 50), set to -1 to disable; override via smart comment <code class="language-text">@paginationCap 50</code></li>\n<li><code class="language-text">--graphql-depth-limit [int]</code><br>\n[PRO] ⚡️[experimental] Validates GraphQL queries cannot be deeper than the specified int (default: 16), set to -1 to disable</li>\n<li><code class="language-text">--graphql-cost-limit [int]</code><br>\n[PRO] ⚡️[experimental] Only allows queries with a computed cost below the specified int (default: 1000), set to -1 to disable</li>\n</ul>',frontmatter:{path:"/postgraphile/usage-cli/",title:"PostGraphile CLI",showExamples:null}},nav:{edges:[{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"},{id:"community",title:"Community"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/examples/",title:"Examples",sectionId:"overview"},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"overview"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/smart-comments/",title:"Smart Comments",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/extending/",title:"Schema Plugins",sectionId:"overview"},{to:"/postgraphile/plugins/",title:"Server Plugins",sectionId:"overview"},{to:"/postgraphile/subscriptions/",title:"Subscriptions",sectionId:"overview"},{to:"/postgraphile/production/",title:"Production Considerations",sectionId:"overview"},{to:"/postgraphile/reserved-keywords/",title:"Reserved Keywords",sectionId:"overview"},{to:"/postgraphile/debugging/",title:"Debugging",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/v4-new-features/",title:"v4 Feature Guide",sectionId:"guides"},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"},{to:"/postgraphile/community-plugins/",title:"Community Plugins",sectionId:"community"},{to:"/postgraphile/community-chat/",title:"Community Chat",sectionId:"community"},{to:"/postgraphile/code-of-conduct/",title:"Code of Conduct",sectionId:"community"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]},examples:{edges:[{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [0] >>> JSON",title:"Basic",examples:[{title:"Forums",query:"{\n  allForums {\n    nodes {\n      nodeId\n      id\n      slug\n      name\n      description\n      createdAt\n      updatedAt\n    }\n  }\n}\n",result:'{\n  "allForums": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDFd",\n        "id": 1,\n        "slug": "cat-life",\n        "name": "Cat Life",\n        "description":\n          "A forum all about cats and how fluffy they are and how they completely ignore their owners unless there is food. Or yarn.",\n        "createdAt":\n          "2018-07-20T15:10:22.228911+00:00",\n        "updatedAt":\n          "2018-07-20T15:10:22.228911+00:00"\n      },\n      {\n        "nodeId": "WyJmb3J1bXMiLDJd",\n        "id": 2,\n        "slug": "dog-life",\n        "name": "Dog Life",\n        "description": "",\n        "createdAt":\n          "2018-07-20T15:10:22.228911+00:00",\n        "updatedAt":\n          "2018-07-20T15:10:22.228911+00:00"\n      },\n      {\n        "nodeId": "WyJmb3J1bXMiLDNd",\n        "id": 3,\n        "slug": "slug-life",\n        "name": "Slug Life",\n        "description": "",\n        "createdAt":\n          "2018-07-20T15:10:22.228911+00:00",\n        "updatedAt":\n          "2018-07-20T15:10:22.228911+00:00"\n      }\n    ]\n  }\n}\n'},{title:"Forum by slug",query:'{\n  forumBySlug(slug: "slug-life") {\n    nodeId\n    id\n    slug\n    name\n    description\n    createdAt\n    updatedAt\n  }\n}\n',result:'{\n  "forumBySlug": {\n    "nodeId": "WyJmb3J1bXMiLDNd",\n    "id": 3,\n    "slug": "slug-life",\n    "name": "Slug Life",\n    "description": "",\n    "createdAt":\n      "2018-07-20T15:10:22.228911+00:00",\n    "updatedAt":\n      "2018-07-20T15:10:22.228911+00:00"\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [1] >>> JSON",title:"Collections",examples:[{title:"First offset",query:"{\n  allForums(first: 1, offset: 1) {\n    nodes {\n      nodeId\n      id\n      name\n    }\n  }\n}\n",result:'{\n  "allForums": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDJd",\n        "id": 2,\n        "name": "Dog Life"\n      }\n    ]\n  }\n}\n'},{title:"Relation condition",query:'{\n  forumBySlug(slug: "cat-life") {\n    nodeId\n    id\n    name\n    topics(\n      condition: { authorId: 1 }\n    ) {\n      nodes {\n        nodeId\n        id\n        title\n      }\n    }\n  }\n}\n',result:'{\n  "forumBySlug": {\n    "nodeId": "WyJmb3J1bXMiLDFd",\n    "id": 1,\n    "name": "Cat Life",\n    "topics": {\n      "nodes": [\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDFd",\n          "id": 1,\n          "title": "cats cats cats"\n        },\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDJd",\n          "id": 2,\n          "title": "snooze life"\n        },\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDNd",\n          "id": 3,\n          "title": "too hot"\n        }\n      ]\n    }\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [2] >>> JSON",title:"Relations",examples:[{title:"Forums topics posts",query:"{\n  forumById(id: 1) {\n    name\n    topics(\n      first: 1\n      orderBy: [CREATED_AT_ASC]\n    ) {\n      nodes {\n        id\n        title\n        bodySummary\n        author {\n          id\n          username\n        }\n        createdAt\n        posts(\n          first: 1\n          orderBy: [ID_DESC]\n        ) {\n          nodes {\n            id\n            author {\n              id\n              username\n            }\n            body\n          }\n        }\n      }\n    }\n  }\n}\n",result:'{\n  "forumById": {\n    "name": "Cat Life",\n    "topics": {\n      "nodes": [\n        {\n          "id": 1,\n          "title": "cats cats cats",\n          "bodySummary":\n            "lets discuss cats because t...",\n          "author": {\n            "id": 1,\n            "username": "user"\n          },\n          "createdAt":\n            "2018-07-20T15:10:22.228911+00:00",\n          "posts": {\n            "nodes": [\n              {\n                "id": 3,\n                "author": {\n                  "id": 1,\n                  "username": "user"\n                },\n                "body":\n                  "I love it when they completely ignore you until they want something. So much better than dogs am I rite?"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [3] >>> JSON",title:"Mutations",examples:[{title:"Create",query:'mutation {\n  createTopic(\n    input: {\n      topic: {\n        forumId: 1\n        title: "My question relates to mutations..."\n        body: "How do you write them?"\n      }\n    }\n  ) {\n    topic {\n      nodeId\n      id\n      forumId\n      title\n      body\n    }\n  }\n}\n',result:'{\n  "createTopic": {\n    "topic": {\n      "nodeId": "WyJ0b3BpY3MiLDRd",\n      "id": 4,\n      "forumId": 1,\n      "title":\n        "My question relates to mutations...",\n      "body": "How do you write them?"\n    }\n  }\n}\n'},{title:"Update",query:'mutation {\n  updateTopicById(\n    input: {\n      id: 1\n      topicPatch: {\n        title: "My (edited) title"\n      }\n    }\n  ) {\n    topic {\n      nodeId\n      id\n      title\n      body\n    }\n  }\n}\n',result:'{\n  "updateTopicById": {\n    "topic": {\n      "nodeId": "WyJ0b3BpY3MiLDFd",\n      "id": 1,\n      "title": "My (edited) title",\n      "body":\n        "lets discuss cats because theyre totally cool"\n    }\n  }\n}\n'},{title:"Delete",query:"mutation {\n  deleteTopicById(input: { id: 1 }) {\n    deletedTopicId\n  }\n}\n",result:'{\n  "deleteTopicById": {\n    "deletedTopicId":\n      "WyJ0b3BpY3MiLDFd"\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [4] >>> JSON",title:"Custom queries",examples:[{title:"Single scalar",query:"{\n  randomNumber\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.random_number() returns int\n#  language sql stable\n#  as $$\n#    select 4; -- Chosen by fair dice roll. Guaranteed to be random. XKCD#221\n#  $$;\n#\n",result:'{ "randomNumber": 4 }\n'},{title:"Single row",query:"{\n  currentUser {\n    nodeId\n    id\n    username\n  }\n}\n\n# Added to the GraphQL schema via\n# this SQL:\n#\n#   create function current_user()\n#   returns app_public.users\n#   language sql stable\n#   as $$\n#     select users.*\n#     from app_public.users\n#     where id = current_user_id();\n#   $$;\n",result:'{\n  "currentUser": {\n    "nodeId": "WyJ1c2VycyIsMV0=",\n    "id": 1,\n    "username": "user"\n  }\n}\n'},{title:"Rows connection",query:"{\n  forumsAboutCats {\n    nodes {\n      nodeId\n      id\n      name\n      slug\n    }\n  }\n}\n\n# Created from SQL like:\n#\n#  create function app_public.forums_about_cats()\n#  returns setof app_public.forums\n#  language sql stable\n#  as $$\n#    select *\n#    from app_public.forums\n#    where slug like 'cat-%';\n#  $$;\n",result:'{\n  "forumsAboutCats": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDFd",\n        "id": 1,\n        "name": "Cat Life",\n        "slug": "cat-life"\n      }\n    ]\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [5] >>> JSON",title:"Custom mutations",examples:[{title:"Forgot password",query:"mutation {\n  forgotPassword(\n    input: {\n      email: \"user@example.com\"\n    }\n  ) {\n    success\n  }\n}\n\n# Generated with SQL like this:\n#\n#  create function forgot_password(email text)\n#  returns boolean\n#  language plpgsql volatile\n#  as $$\n#    ...\n#  $$;\n#\n#  -- Optionally rename the result field:\n#  comment on function\n#    forgot_password(email text)\n#    is '@resultFieldName success';\n",result:'{\n  "forgotPassword": {\n    "success": true\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [6] >>> JSON",title:"Computed columns",examples:[{title:"Topic summary",query:"{\n  topicById(id: 2) {\n    body\n    bodySummary\n  }\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.topics_body_summary(\n#    t app_public.topics,\n#    max_length int = 30\n#  )\n#  returns text\n#  language sql stable\n#  as $$\n#    select case\n#      when length(t.body) > max_length\n#      then left(t.body, max_length - 3)\n#             || '...'\n#      else t.body\n#      end;\n#  $$;\n",result:'{\n  "topicById": {\n    "body":\n      "do you find your cat just sleeps everywhere",\n    "bodySummary":\n      "do you find your cat just s..."\n  }\n}\n'},{title:"Topic summary with arg",query:"{\n  topicById(id: 2) {\n    body\n    bodySummary(maxLength: 20)\n  }\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.topics_body_summary(\n#    t app_public.topics,\n#    max_length int = 30\n#  )\n#  returns text\n#  language sql stable\n#  as $$\n#    select case\n#      when length(t.body) > max_length\n#      then left(t.body, max_length - 3)\n#             || '...'\n#      else t.body\n#      end;\n#  $$;\n",result:'{\n  "topicById": {\n    "body":\n      "do you find your cat just sleeps everywhere",\n    "bodySummary":\n      "do you find your ..."\n  }\n}\n'}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-usage-cli-73743f4637094678cae9.js.map