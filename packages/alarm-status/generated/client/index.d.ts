
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model AlarmStatus
 * 
 */
export type AlarmStatus = {
  id: string
  alarmId: string
  createdAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AlarmStatuses
 * const alarmStatuses = await prisma.alarmStatus.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AlarmStatuses
   * const alarmStatuses = await prisma.alarmStatus.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.alarmStatus`: Exposes CRUD operations for the **AlarmStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlarmStatuses
    * const alarmStatuses = await prisma.alarmStatus.findMany()
    * ```
    */
  get alarmStatus(): Prisma.AlarmStatusDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.9.2
   * Query Engine version: bcc2ff906db47790ee902e7bbc76d7ffb1893009
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    AlarmStatus: 'AlarmStatus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AlarmStatus
   */


  export type AggregateAlarmStatus = {
    _count: AlarmStatusCountAggregateOutputType | null
    _min: AlarmStatusMinAggregateOutputType | null
    _max: AlarmStatusMaxAggregateOutputType | null
  }

  export type AlarmStatusMinAggregateOutputType = {
    id: string | null
    alarmId: string | null
    createdAt: Date | null
  }

  export type AlarmStatusMaxAggregateOutputType = {
    id: string | null
    alarmId: string | null
    createdAt: Date | null
  }

  export type AlarmStatusCountAggregateOutputType = {
    id: number
    alarmId: number
    createdAt: number
    _all: number
  }


  export type AlarmStatusMinAggregateInputType = {
    id?: true
    alarmId?: true
    createdAt?: true
  }

  export type AlarmStatusMaxAggregateInputType = {
    id?: true
    alarmId?: true
    createdAt?: true
  }

  export type AlarmStatusCountAggregateInputType = {
    id?: true
    alarmId?: true
    createdAt?: true
    _all?: true
  }

  export type AlarmStatusAggregateArgs = {
    /**
     * Filter which AlarmStatus to aggregate.
     * 
    **/
    where?: AlarmStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlarmStatuses to fetch.
     * 
    **/
    orderBy?: Enumerable<AlarmStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AlarmStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlarmStatuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlarmStatuses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlarmStatuses
    **/
    _count?: true | AlarmStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlarmStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlarmStatusMaxAggregateInputType
  }

  export type GetAlarmStatusAggregateType<T extends AlarmStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateAlarmStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlarmStatus[P]>
      : GetScalarType<T[P], AggregateAlarmStatus[P]>
  }




  export type AlarmStatusGroupByArgs = {
    where?: AlarmStatusWhereInput
    orderBy?: Enumerable<AlarmStatusOrderByWithAggregationInput>
    by: Array<AlarmStatusScalarFieldEnum>
    having?: AlarmStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlarmStatusCountAggregateInputType | true
    _min?: AlarmStatusMinAggregateInputType
    _max?: AlarmStatusMaxAggregateInputType
  }


  export type AlarmStatusGroupByOutputType = {
    id: string
    alarmId: string
    createdAt: Date
    _count: AlarmStatusCountAggregateOutputType | null
    _min: AlarmStatusMinAggregateOutputType | null
    _max: AlarmStatusMaxAggregateOutputType | null
  }

  type GetAlarmStatusGroupByPayload<T extends AlarmStatusGroupByArgs> = Promise<
    Array<
      PickArray<AlarmStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlarmStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlarmStatusGroupByOutputType[P]>
            : GetScalarType<T[P], AlarmStatusGroupByOutputType[P]>
        }
      >
    >


  export type AlarmStatusSelect = {
    id?: boolean
    alarmId?: boolean
    createdAt?: boolean
  }

  export type AlarmStatusGetPayload<
    S extends boolean | null | undefined | AlarmStatusArgs,
    U = keyof S
      > = S extends true
        ? AlarmStatus
    : S extends undefined
    ? never
    : S extends AlarmStatusArgs | AlarmStatusFindManyArgs
    ?'include' extends U
    ? AlarmStatus 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof AlarmStatus ?AlarmStatus [P]
  : 
     never
  } 
    : AlarmStatus
  : AlarmStatus


  type AlarmStatusCountArgs = Merge<
    Omit<AlarmStatusFindManyArgs, 'select' | 'include'> & {
      select?: AlarmStatusCountAggregateInputType | true
    }
  >

  export interface AlarmStatusDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one AlarmStatus that matches the filter.
     * @param {AlarmStatusFindUniqueArgs} args - Arguments to find a AlarmStatus
     * @example
     * // Get one AlarmStatus
     * const alarmStatus = await prisma.alarmStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlarmStatusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AlarmStatusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AlarmStatus'> extends True ? CheckSelect<T, Prisma__AlarmStatusClient<AlarmStatus>, Prisma__AlarmStatusClient<AlarmStatusGetPayload<T>>> : CheckSelect<T, Prisma__AlarmStatusClient<AlarmStatus | null >, Prisma__AlarmStatusClient<AlarmStatusGetPayload<T> | null >>

    /**
     * Find the first AlarmStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmStatusFindFirstArgs} args - Arguments to find a AlarmStatus
     * @example
     * // Get one AlarmStatus
     * const alarmStatus = await prisma.alarmStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlarmStatusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AlarmStatusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AlarmStatus'> extends True ? CheckSelect<T, Prisma__AlarmStatusClient<AlarmStatus>, Prisma__AlarmStatusClient<AlarmStatusGetPayload<T>>> : CheckSelect<T, Prisma__AlarmStatusClient<AlarmStatus | null >, Prisma__AlarmStatusClient<AlarmStatusGetPayload<T> | null >>

    /**
     * Find zero or more AlarmStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmStatusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlarmStatuses
     * const alarmStatuses = await prisma.alarmStatus.findMany()
     * 
     * // Get first 10 AlarmStatuses
     * const alarmStatuses = await prisma.alarmStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alarmStatusWithIdOnly = await prisma.alarmStatus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlarmStatusFindManyArgs>(
      args?: SelectSubset<T, AlarmStatusFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<AlarmStatus>>, PrismaPromise<Array<AlarmStatusGetPayload<T>>>>

    /**
     * Create a AlarmStatus.
     * @param {AlarmStatusCreateArgs} args - Arguments to create a AlarmStatus.
     * @example
     * // Create one AlarmStatus
     * const AlarmStatus = await prisma.alarmStatus.create({
     *   data: {
     *     // ... data to create a AlarmStatus
     *   }
     * })
     * 
    **/
    create<T extends AlarmStatusCreateArgs>(
      args: SelectSubset<T, AlarmStatusCreateArgs>
    ): CheckSelect<T, Prisma__AlarmStatusClient<AlarmStatus>, Prisma__AlarmStatusClient<AlarmStatusGetPayload<T>>>

    /**
     * Create many AlarmStatuses.
     *     @param {AlarmStatusCreateManyArgs} args - Arguments to create many AlarmStatuses.
     *     @example
     *     // Create many AlarmStatuses
     *     const alarmStatus = await prisma.alarmStatus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlarmStatusCreateManyArgs>(
      args?: SelectSubset<T, AlarmStatusCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AlarmStatus.
     * @param {AlarmStatusDeleteArgs} args - Arguments to delete one AlarmStatus.
     * @example
     * // Delete one AlarmStatus
     * const AlarmStatus = await prisma.alarmStatus.delete({
     *   where: {
     *     // ... filter to delete one AlarmStatus
     *   }
     * })
     * 
    **/
    delete<T extends AlarmStatusDeleteArgs>(
      args: SelectSubset<T, AlarmStatusDeleteArgs>
    ): CheckSelect<T, Prisma__AlarmStatusClient<AlarmStatus>, Prisma__AlarmStatusClient<AlarmStatusGetPayload<T>>>

    /**
     * Update one AlarmStatus.
     * @param {AlarmStatusUpdateArgs} args - Arguments to update one AlarmStatus.
     * @example
     * // Update one AlarmStatus
     * const alarmStatus = await prisma.alarmStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlarmStatusUpdateArgs>(
      args: SelectSubset<T, AlarmStatusUpdateArgs>
    ): CheckSelect<T, Prisma__AlarmStatusClient<AlarmStatus>, Prisma__AlarmStatusClient<AlarmStatusGetPayload<T>>>

    /**
     * Delete zero or more AlarmStatuses.
     * @param {AlarmStatusDeleteManyArgs} args - Arguments to filter AlarmStatuses to delete.
     * @example
     * // Delete a few AlarmStatuses
     * const { count } = await prisma.alarmStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlarmStatusDeleteManyArgs>(
      args?: SelectSubset<T, AlarmStatusDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlarmStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlarmStatuses
     * const alarmStatus = await prisma.alarmStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlarmStatusUpdateManyArgs>(
      args: SelectSubset<T, AlarmStatusUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AlarmStatus.
     * @param {AlarmStatusUpsertArgs} args - Arguments to update or create a AlarmStatus.
     * @example
     * // Update or create a AlarmStatus
     * const alarmStatus = await prisma.alarmStatus.upsert({
     *   create: {
     *     // ... data to create a AlarmStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlarmStatus we want to update
     *   }
     * })
    **/
    upsert<T extends AlarmStatusUpsertArgs>(
      args: SelectSubset<T, AlarmStatusUpsertArgs>
    ): CheckSelect<T, Prisma__AlarmStatusClient<AlarmStatus>, Prisma__AlarmStatusClient<AlarmStatusGetPayload<T>>>

    /**
     * Count the number of AlarmStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmStatusCountArgs} args - Arguments to filter AlarmStatuses to count.
     * @example
     * // Count the number of AlarmStatuses
     * const count = await prisma.alarmStatus.count({
     *   where: {
     *     // ... the filter for the AlarmStatuses we want to count
     *   }
     * })
    **/
    count<T extends AlarmStatusCountArgs>(
      args?: Subset<T, AlarmStatusCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlarmStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlarmStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlarmStatusAggregateArgs>(args: Subset<T, AlarmStatusAggregateArgs>): PrismaPromise<GetAlarmStatusAggregateType<T>>

    /**
     * Group by AlarmStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlarmStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlarmStatusGroupByArgs['orderBy'] }
        : { orderBy?: AlarmStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlarmStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlarmStatusGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlarmStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AlarmStatusClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * AlarmStatus findUnique
   */
  export type AlarmStatusFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the AlarmStatus
     * 
    **/
    select?: AlarmStatusSelect | null
    /**
     * Throw an Error if a AlarmStatus can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AlarmStatus to fetch.
     * 
    **/
    where: AlarmStatusWhereUniqueInput
  }


  /**
   * AlarmStatus findFirst
   */
  export type AlarmStatusFindFirstArgs = {
    /**
     * Select specific fields to fetch from the AlarmStatus
     * 
    **/
    select?: AlarmStatusSelect | null
    /**
     * Throw an Error if a AlarmStatus can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AlarmStatus to fetch.
     * 
    **/
    where?: AlarmStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlarmStatuses to fetch.
     * 
    **/
    orderBy?: Enumerable<AlarmStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlarmStatuses.
     * 
    **/
    cursor?: AlarmStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlarmStatuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlarmStatuses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlarmStatuses.
     * 
    **/
    distinct?: Enumerable<AlarmStatusScalarFieldEnum>
  }


  /**
   * AlarmStatus findMany
   */
  export type AlarmStatusFindManyArgs = {
    /**
     * Select specific fields to fetch from the AlarmStatus
     * 
    **/
    select?: AlarmStatusSelect | null
    /**
     * Filter, which AlarmStatuses to fetch.
     * 
    **/
    where?: AlarmStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlarmStatuses to fetch.
     * 
    **/
    orderBy?: Enumerable<AlarmStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlarmStatuses.
     * 
    **/
    cursor?: AlarmStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlarmStatuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlarmStatuses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AlarmStatusScalarFieldEnum>
  }


  /**
   * AlarmStatus create
   */
  export type AlarmStatusCreateArgs = {
    /**
     * Select specific fields to fetch from the AlarmStatus
     * 
    **/
    select?: AlarmStatusSelect | null
    /**
     * The data needed to create a AlarmStatus.
     * 
    **/
    data: XOR<AlarmStatusCreateInput, AlarmStatusUncheckedCreateInput>
  }


  /**
   * AlarmStatus createMany
   */
  export type AlarmStatusCreateManyArgs = {
    /**
     * The data used to create many AlarmStatuses.
     * 
    **/
    data: Enumerable<AlarmStatusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AlarmStatus update
   */
  export type AlarmStatusUpdateArgs = {
    /**
     * Select specific fields to fetch from the AlarmStatus
     * 
    **/
    select?: AlarmStatusSelect | null
    /**
     * The data needed to update a AlarmStatus.
     * 
    **/
    data: XOR<AlarmStatusUpdateInput, AlarmStatusUncheckedUpdateInput>
    /**
     * Choose, which AlarmStatus to update.
     * 
    **/
    where: AlarmStatusWhereUniqueInput
  }


  /**
   * AlarmStatus updateMany
   */
  export type AlarmStatusUpdateManyArgs = {
    /**
     * The data used to update AlarmStatuses.
     * 
    **/
    data: XOR<AlarmStatusUpdateManyMutationInput, AlarmStatusUncheckedUpdateManyInput>
    /**
     * Filter which AlarmStatuses to update
     * 
    **/
    where?: AlarmStatusWhereInput
  }


  /**
   * AlarmStatus upsert
   */
  export type AlarmStatusUpsertArgs = {
    /**
     * Select specific fields to fetch from the AlarmStatus
     * 
    **/
    select?: AlarmStatusSelect | null
    /**
     * The filter to search for the AlarmStatus to update in case it exists.
     * 
    **/
    where: AlarmStatusWhereUniqueInput
    /**
     * In case the AlarmStatus found by the `where` argument doesn't exist, create a new AlarmStatus with this data.
     * 
    **/
    create: XOR<AlarmStatusCreateInput, AlarmStatusUncheckedCreateInput>
    /**
     * In case the AlarmStatus was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AlarmStatusUpdateInput, AlarmStatusUncheckedUpdateInput>
  }


  /**
   * AlarmStatus delete
   */
  export type AlarmStatusDeleteArgs = {
    /**
     * Select specific fields to fetch from the AlarmStatus
     * 
    **/
    select?: AlarmStatusSelect | null
    /**
     * Filter which AlarmStatus to delete.
     * 
    **/
    where: AlarmStatusWhereUniqueInput
  }


  /**
   * AlarmStatus deleteMany
   */
  export type AlarmStatusDeleteManyArgs = {
    /**
     * Filter which AlarmStatuses to delete
     * 
    **/
    where?: AlarmStatusWhereInput
  }


  /**
   * AlarmStatus without action
   */
  export type AlarmStatusArgs = {
    /**
     * Select specific fields to fetch from the AlarmStatus
     * 
    **/
    select?: AlarmStatusSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AlarmStatusScalarFieldEnum: {
    id: 'id',
    alarmId: 'alarmId',
    createdAt: 'createdAt'
  };

  export type AlarmStatusScalarFieldEnum = (typeof AlarmStatusScalarFieldEnum)[keyof typeof AlarmStatusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type AlarmStatusWhereInput = {
    AND?: Enumerable<AlarmStatusWhereInput>
    OR?: Enumerable<AlarmStatusWhereInput>
    NOT?: Enumerable<AlarmStatusWhereInput>
    id?: StringFilter | string
    alarmId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type AlarmStatusOrderByWithRelationInput = {
    id?: SortOrder
    alarmId?: SortOrder
    createdAt?: SortOrder
  }

  export type AlarmStatusWhereUniqueInput = {
    id?: string
  }

  export type AlarmStatusOrderByWithAggregationInput = {
    id?: SortOrder
    alarmId?: SortOrder
    createdAt?: SortOrder
    _count?: AlarmStatusCountOrderByAggregateInput
    _max?: AlarmStatusMaxOrderByAggregateInput
    _min?: AlarmStatusMinOrderByAggregateInput
  }

  export type AlarmStatusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AlarmStatusScalarWhereWithAggregatesInput>
    OR?: Enumerable<AlarmStatusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AlarmStatusScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    alarmId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AlarmStatusCreateInput = {
    id?: string
    alarmId: string
    createdAt?: Date | string
  }

  export type AlarmStatusUncheckedCreateInput = {
    id?: string
    alarmId: string
    createdAt?: Date | string
  }

  export type AlarmStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alarmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alarmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmStatusCreateManyInput = {
    id?: string
    alarmId: string
    createdAt?: Date | string
  }

  export type AlarmStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alarmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alarmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type AlarmStatusCountOrderByAggregateInput = {
    id?: SortOrder
    alarmId?: SortOrder
    createdAt?: SortOrder
  }

  export type AlarmStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    alarmId?: SortOrder
    createdAt?: SortOrder
  }

  export type AlarmStatusMinOrderByAggregateInput = {
    id?: SortOrder
    alarmId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}