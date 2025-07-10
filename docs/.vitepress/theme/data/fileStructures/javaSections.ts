export const javaBasic = [
    {
      title: 'Java Basics & History',
      items: [
        { label: 'Evolution of Java', link: '/java/java_core/01_Basics/01_Java_Evolution' },
        { label: 'Java Buzzwords', link: '/java/java_core/01_Basics/02_Java_Buzzwords' },
        { label: 'Object-Oriented Programming', link: '/java/java_core/01_Basics/03_Java_OOP' },
        { label: 'Compiling Program', link: '/java/java_core/01_Basics/04_Java_Compiling_Program' },
        { label: 'Idintifiers & Structures', link: '/java/java_core/01_Basics/05_Java_Identifiers_Structure' },
      ]
    }
  ]

export const javaDTOP = [
    {
      title: 'Java Data Types & Operators',
      items: [
        { label: 'Data Types & Operators', link: '/java/java_core/02_Data_Types_Operators/01_Data_Types_Operators' },
        { label: 'Type Conversion', link: '/java/java_core/02_Data_Types_Operators/02_Type_Conversion' },
      ]
    }
  ]

export const javaControlStatements = [
  {
    title: 'Control Statements',
    items: [
      { label: 'if_else Conditonal', link: '/java/java_core/03_Control_Statements/01_if_else' },
      { label: 'switch Statement', link: '/java/java_core/03_Control_Statements/02_switch_statement' },
      { label: 'for & while Loop', link: '/java/java_core/03_Control_Statements/03_for_while_loops' },
      { label: 'break & continue', link: '/java/java_core/03_Control_Statements/04_break_continue' },
      { label: 'switch Expression', link: '/java/java_core/03_Control_Statements/05_switch_expression' },
    ]
  }
]

export const javaClassObject = [
  {
    title: 'Class Object',
    items: [
      { label: 'class Fundamentals', link: '/java/java_core/04_Class_Object/01_class_object' },
      { label: 'Methods', link: '/java/java_core/04_Class_Object/02_methods' },
      { label: 'Constructors', link: '/java/java_core/04_Class_Object/03_constructor' },
    ]
  }
]

export const javaArray = [
  {
    title: 'Arrays',
    items: [
      { label: 'Array Basics', link: '/java/java_core/05_arrays/01_arrays' },
      { label: 'for_each Loop & String Class', link: '/java/java_core/05_arrays/02_for_each_strings' },
      { label: 'Text Block, var & Ternary Operator', link: '/java/java_core/05_arrays/03_text_block_ternary_operator' },
    ]
  }
]
  

export const javaMethods = [
  {
    title: 'Methods',
    items: [
      { label: 'Arguments & Return', link: '/java/java_core/06_methods/01_Argument_passing_return' },
      { label: 'Method Overloading', link: '/java/java_core/06_methods/02_method_overloading' },
      { label: 'static & vargs', link: '/java/java_core/06_methods/03_static_vargs' },
      { label: 'Inheritance', link: '/java/java_core/06_methods/05_Inheritance' },
      { label: 'super keyword', link: '/java/java_core/06_methods/06_super' },
      { label: 'Method Overloading', link: '/java/java_core/06_methods/07_method_overriding' },
      { label: 'Abstract Class', link: '/java/java_core/06_methods/abstract_object_class' },
      { label: 'Recursion', link: '/java/java_core/06_methods/recursion' },
    ]
  }
]

export const javaPackInter = [
  {
    title: 'Packages & Interfaces',
    items: [
      { label: 'Packages', link: '/java/java_core/07_packages_interface/01_packages' },
      { label: 'Interfaces', link: '/java/java_core/07_packages_interface/03_interfaces' },
    ]
  }
]

export const javaException = [
  {
    title: 'Exception Handling',
    items: [
      { label: 'Exception Fundamentals', link: '/java/java_core/08_exception_handling/01_exception' },
      { label: 'Throwing Exception', link: '/java/java_core/08_exception_handling/02_throwing' },
      { label: 'Additional Exceptions', link: '/java/java_core/08_exception_handling/03_Additional_features' },
    ]
  }
]

export const javaMultiThread = [
  {
    title: 'Multi-Threaded Programming',
    items: [
      { label: 'Multi-Threading Basics', link: '/java/java_core/09_multithread/01_multi_basic' },
      { label: 'Managing Threads', link: '/java/java_core/09_multithread/02_creating_thread' },
      { label: 'Thread Synchronization', link: '/java/java_core/09_multithread/03_thread_sync' },
    ] 
  }             
]
export const javaEnumGeneric = [
  {
    title: 'enum-Boxing-Generics',
    items: [
      { label: 'enum Basics', link: '/java/java_core/10_enum/01_enum' },
      { label: 'Autoboxing', link: '/java/java_core/10_enum/02_autobox' },
      { label: 'Generics Basics', link: '/java/java_core/10_enum/03_genric_b' },
      { label: 'Generics Advanced', link: '/java/java_core/10_enum/04_genric_adv' },
      
    ]
  }
]

export const javaLambda = [
  {
    title: 'Lambda Expression',
    items: [
      { label: 'Lambda Expression Basics', link: '/java/java_core/11_lambda/01_lambda_b' },
      { label: 'Lambda Expression Advanced', link: '/java/java_core/11_lambda/02_lambda_a' },
    ]
  }
]

export const javaCollection = [
  {
    title: 'Collection Frameworks',
    items: [
      { label: 'Collection Basics', link: '/java/java_core/12_collection/01_cfb' },
      // { label: 'Lambda Expression Advanced', link: '/java/java_core/11_lambda/02_lambda_a' },
    ]
  }
]
export const javaSection = [
    ...javaBasic, 
    ...javaDTOP, 
    ...javaControlStatements, 
    ...javaClassObject, 
    ...javaArray,
    ...javaMethods, 
    ...javaPackInter,
    ...javaException,
    ...javaMultiThread,
    ...javaEnumGeneric,
    ...javaLambda,
    ...javaCollection,
  ]
