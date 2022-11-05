import {
	CPlusPlusLogo,
	CSharpLogo,
	DartLogo,
	ElixirLogo,
	FortranLogo,
	GoLogo,
	HaskellLogo,
	JavaLogo,
	JsLogo,
	KotlinLogo,
	MatlabLogo,
	PerlLogo,
	PhpLogo,
	PrologLogo,
	PythonLogo,
	RLogo,
	RubyLogo,
	RustLogo,
	SwiftLogo,
	TypeScriptLogo,
} from '../images';

export type DataProp = {
	id: number;
	title: string;
	description: string;
	url: string;
};

export type ProgrammingLanguagesProps = {
	id: number;
	title: string;
	description: string;
	src: string;
	url: string;
};
export const programmingLanguages: ProgrammingLanguagesProps[] = [
	{
		id: 0,
		title: 'C++',
		description: `C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".`,
		src: CPlusPlusLogo,
		url: 'https://isocpp.org/',
	},
	{
		id: 1,
		title: 'C#',
		description: `C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.`,
		src: CSharpLogo,
		url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
	},
	{
		id: 2,
		title: 'Dart',
		description: `Dart is a client-optimized programming language for apps on multiple platforms. It is developed by Google and is used to build mobile, desktop, server, and web applications.`,
		src: DartLogo,
		url: 'https://dart.dev/',
	},
	{
		id: 3,
		title: 'Elixir',
		description: `Elixir is a dynamic, functional language designed for building scalable and maintainable applications.`,
		src: ElixirLogo,
		url: 'https://elixir-lang.org/',
	},
	{
		id: 4,
		title: 'Fortran',
		description: `Fortran is a general-purpose, imperative programming language that is especially suited to numeric computation and scientific computing.`,
		src: FortranLogo,
		url: 'https://fortran-lang.org/',
	},
	{
		id: 5,
		title: 'Go',
		description: `Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.`,
		src: GoLogo,
		url: 'https://golang.org/',
	},
	{
		id: 6,
		title: 'Haskell',
		description: `Haskell is a standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.`,
		src: HaskellLogo,
		url: 'https://www.haskell.org/',
	},
	{
		id: 7,
		title: 'Java',
		description: `Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.`,
		src: JavaLogo,
		url: 'https://www.java.com/en/',
	},
	{
		id: 8,
		title: 'JavaScript',
		description: `JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.`,
		src: JsLogo,
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	},
	{
		id: 9,
		title: 'Kotlin',
		description: `Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.`,
		src: KotlinLogo,
		url: 'https://kotlinlang.org/',
	},
	{
		id: 10,
		title: 'MatLab',
		description: `MATLAB is a high-level language and interactive environment that enables you to perform computationally intensive tasks faster than with traditional programming languages such as C, C++, and Fortran.`,
		src: MatlabLogo,
		url: 'https://www.mathworks.com/products/matlab.html',
	},
	{
		id: 11,
		title: 'Perl',
		description: `Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages.`,
		src: PerlLogo,
		url: 'https://www.perl.org/',
	},
	{
		id: 12,
		title: 'PHP',
		description: `PHP is a popular general-purpose scripting language that is especially suited to web development.`,
		src: PhpLogo,
		url: 'https://www.php.net/',
	},
	{
		id: 13,
		title: 'Prolog',
		description: `Prolog is a logic programming language associated with artificial intelligence and computational linguistics.`,
		src: PrologLogo,
		url: 'https://www.swi-prolog.org/',
	},
	{
		id: 14,
		title: 'Python',
		description: `Python is an interpreted, high-level and general-purpose programming language.`,
		src: PythonLogo,
		url: 'https://www.python.org/',
	},
	{
		id: 15,
		title: 'R',
		description: `R is a programming language and software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing.`,
		src: RLogo,
		url: 'https://www.r-project.org/',
	},
	{
		id: 16,
		title: 'Ruby',
		description: `Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.`,
		src: RubyLogo,
		url: 'https://www.ruby-lang.org/en/',
	},
	{
		id: 17,
		title: 'Rust',
		description: `Rust is a multi-paradigm programming language focused on performance and safety, especially safe concurrency.`,
		src: RustLogo,
		url: 'https://www.rust-lang.org/',
	},
	{
		id: 18,
		title: 'Swift',
		description: `Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, Linux, and z/OS.`,
		src: SwiftLogo,
		url: 'https://swift.org/',
	},
	{
		id: 19,
		title: 'TypeScript',
		description: `TypeScript is a superset of JavaScript that compiles to clean JavaScript output.`,
		src: TypeScriptLogo,
		url: 'https://www.typescriptlang.org/',
	},
];

export const data: DataProp[] = [
	{
		id: 1,
		title: 'SapientNitro',
		description: 'I used to work at SapientNitro.',
		url: 'https://placeimg.com/150/150/nature/sepia',
	},
	{
		id: 2,
		title: 'Razorfish',
		description: 'SapientNitro merged with Razorfish.',
		url: 'https://placeimg.com/150/150/animals/sepia',
	},
	{
		id: 3,
		title: 'SapientRazorfish',
		description: 'Now I work at SapientRazorfish.',
		url: 'https://placeimg.com/150/150/tech/sepia',
	},
];
